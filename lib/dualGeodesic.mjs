import { chamferedDodecahedron } from './dualGeodesic/chamferedDodecahedron.mjs';
import { truncatedPentakisDodecahedron } from './dualGeodesic/truncatedPentakisDodecahedron.mjs';
import { truncatedPentakisIcosidodecahedron } from './dualGeodesic/truncatedPentakisIcosidodecahedron.mjs';
import { dualGeodesicIcosahedronPattern7 } from './dualGeodesic/dualGeodesicIcosahedronPattern7.mjs';
import { dualGeodesicIcosahedronPattern10 } from './dualGeodesic/dualGeodesicIcosahedronPattern10.mjs';

let dualGeodesic = {};
dualGeodesic['chamferedDodecahedron'] = chamferedDodecahedron;
dualGeodesic['truncatedPentakisDodecahedron'] = truncatedPentakisDodecahedron;
dualGeodesic['truncatedPentakisIcosidodecahedron'] = truncatedPentakisIcosidodecahedron;
dualGeodesic['dualGeodesicIcosahedronPattern7'] = dualGeodesicIcosahedronPattern7;
dualGeodesic['dualGeodesicIcosahedronPattern10'] = dualGeodesicIcosahedronPattern10;

export { dualGeodesic };
