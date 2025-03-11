const SHAPE_CONFIG = {
    diamond: { thetaX: 0.0, thetaY: 0.0 },
    triangle: { thetaX: toRadians(180.0), thetaY: Math.acos(Math.sqrt((3.0 + Math.sqrt(5.0)) / 6.0)) },
    star: { thetaX: toRadians(180.0), thetaY: toRadians(58.28) }
};

/**
 * Transforms 3D points on a sphere based on latitude, longitude, bearing, and shape type.
 * @param {number} latitude - Latitude in degrees
 * @param {number} longitude - Longitude in degrees
 * @param {number} bearing - Bearing in degrees
 * @param {string} type - Shape type ('triangle' or 'star')
 * @param {number[][]} shape - Array of [x, y, z] coordinates
 * @returns {number[][]} Array of [index, longitude, latitude, nextIndex]
 */
export function getPoints(latitude, longitude, bearing, type, shape) {
    console.log(latitude, longitude, bearing, type, shape);
    latitude = Number(latitude);
    longitude = Number(longitude);
    bearing = Number(bearing);
    if (typeof latitude !== 'number' || typeof longitude !== 'number' || typeof bearing !== 'number') {
        throw new Error('Latitude, longitude, and bearing must be numbers');
    }
    if (!SHAPE_CONFIG[type]) throw new Error('Invalid shape type');

    const thetaX = -toRadians(bearing);
    const thetaY = -toRadians(latitude);
    const thetaZ = toRadians(longitude);

    let rotatedShape = shape;
    const config = SHAPE_CONFIG[type];
    if (config) {
        rotatedShape = shape.map(point => rotatePoint(point, config.thetaX, config.thetaY, 0));
    }

    const finalShape = rotatedShape.map(point => rotatePoint(point, thetaX, thetaY, thetaZ));
    return getCoordinates(finalShape);
}

function rotatePoint([x, y, z], thetaX, thetaY, thetaZ) {
    const cosX = Math.cos(thetaX), sinX = Math.sin(thetaX);
    const cosY = Math.cos(thetaY), sinY = Math.sin(thetaY);
    const cosZ = Math.cos(thetaZ), sinZ = Math.sin(thetaZ);

    const y1 = y * cosX - z * sinX;
    const z1 = y * sinX + z * cosX;
    const x2 = x * cosY + z1 * sinY;
    const z2 = -x * sinY + z1 * cosY;
    const x3 = x2 * cosZ - y1 * sinZ;
    const y3 = x2 * sinZ + y1 * cosZ;

    return [x3, y3, z2];
}

function getCoordinates(points) {
    return points.map((coords, index) => {
        const [x, y, z] = coords;
        const r = Math.sqrt(x * x + y * y);

        const theta = z < 0 ? Math.PI + Math.atan(r / z) : z === 0 ? Math.PI / 2.0 : Math.atan(r / z);
        let phi;
        if (x === 0 && y === 0) phi = NaN;
        else if (x === 0) phi = y > 0 ? Math.PI / 2.0 : Math.PI * 3.0 / 2.0;
        else phi = Math.atan(y / x) + (x < 0 ? Math.PI : y < 0 ? 2 * Math.PI : 0);

        const latitude = 90.0 - toDegrees(theta);
        const longitudeRaw = toDegrees(phi);
        const longitude = longitudeRaw <= 180.0 ? longitudeRaw : longitudeRaw - 360.0;

        return [index, longitude, latitude, index + 1];
    });
}

function toRadians(degrees) {
    return degrees * Math.PI / 180.0;
}

function toDegrees(radians) {
    return radians * 180.0 / Math.PI;
}
