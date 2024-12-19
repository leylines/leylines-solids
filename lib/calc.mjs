export function getPoints(latitude, longitude, bearing, type, shape) {
    if (bearing === -180) {
        bearing = 180;
    }
    bearing = -toRadians(bearing);

    const rotateShape = (shape, thetaY, thetaX) => rotateX(rotateY(shape, thetaY), thetaX);

    let thetaX, thetaY, thetaZ;

    if (type === "triangle") {
        thetaY = Math.acos(Math.sqrt((3.0 + Math.sqrt(5.0)) / 6.0));
        thetaX = toRadians(180.0);
        shape = rotateShape(shape, thetaY, thetaX);
    } else if (type === "star") {
        thetaY = toRadians(58.28);
        thetaX = toRadians(180.0);
        shape = rotateShape(shape, thetaY, thetaX);
    }

    // set rotational angles
    thetaX = bearing;
    thetaZ = toRadians(longitude);
    thetaY = -toRadians(latitude);

    const results = getCoordinates(rotateZ(rotateY(rotateX(shape, thetaX), thetaY), thetaZ));
    return results;
}

function getCoordinates(param) {

    return param.map((coords, index) => {
        const [x, y, z] = coords;

        const theta = z < 0 ? Math.PI + Math.atan(Math.sqrt(x * x + y * y) / z) :
                      z === 0 ? Math.PI / 2.0 :
                      Math.atan(Math.sqrt(x * x + y * y) / z);

        const phi = x < 0 && y !== 0 ? Math.PI + Math.atan(y / x) :
                    x === 0 && y > 0 ? Math.PI / 2.0 :
                    x === 0 && y < 0 ? Math.PI * 3.0 / 2.0 :
                    y === 0 && x > 0 ? 0.0 :
                    y === 0 && x < 0 ? Math.PI :
                    x > 0 && y <= 0 ? 2 * Math.PI + Math.atan(y / x) :
                    x === 0 && y === 0 ? 888.0 :
                    Math.atan(y / x);

        const thetaDegrees = toDegrees(theta);
        const phiDegrees = toDegrees(phi);

        const latitude = 90.0 - thetaDegrees;
        let longitude = phiDegrees <= 180.0 ? phiDegrees : phiDegrees - 360.0;
        if (longitude > 600.0) {
            longitude = 0.0;
        }

        return [index, longitude, latitude, index + 1];
    });
}

function rotateZ(param, thetaZ) {
    return param.map(([x, y, z]) => {
        const newX = x * Math.cos(thetaZ) - y * Math.sin(thetaZ);
        const newY = x * Math.sin(thetaZ) + y * Math.cos(thetaZ);
        return [newX, newY, z];
    });
}

function rotateX(param, thetaX) {
    return param.map(([x, y, z]) => {
        const newY = y * Math.cos(thetaX) - z * Math.sin(thetaX);
        const newZ = y * Math.sin(thetaX) + z * Math.cos(thetaX);
        return [x, newY, newZ];
    });
}

function rotateY(param, thetaY) {
    return param.map(([x, y, z]) => {
        const newX = x * Math.cos(thetaY) + z * Math.sin(thetaY);
        const newZ = -x * Math.sin(thetaY) + z * Math.cos(thetaY);
        return [newX, y, newZ];
    });
}

function toRadians(degrees) {
   return degrees * Math.PI / 180.0;
};

function toDegrees(radians) {
   return radians * 180.0 / Math.PI;
};
