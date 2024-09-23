import { chamferedDodecahedron } from './dualGeodesic/chamferedDodecahedron.mjs';
import { hexpropelloDodecahedron } from './dualGeodesic/hexpropelloDodecahedron.mjs';
import { truncatedPentakisDodecahedron } from './dualGeodesic/truncatedPentakisDodecahedron.mjs';
import { truncatedPentakisIcosidodecahedron } from './dualGeodesic/truncatedPentakisIcosidodecahedron.mjs';

let dualGeodesic = {};
dualGeodesic['chamferedDodecahedron'] = chamferedDodecahedron;
dualGeodesic['hexpropelloDodecahedron'] = hexpropelloDodecahedron;
dualGeodesic['truncatedPentakisDodecahedron'] = truncatedPentakisDodecahedron;
dualGeodesic['truncatedPentakisIcosidodecahedron'] = truncatedPentakisIcosidodecahedron;

export { dualGeodesic };
