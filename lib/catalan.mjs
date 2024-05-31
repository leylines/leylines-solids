import { triakisTetrahedron } from './catalan/triakisTetrahedron.mjs';
import { rhombicDodecahedron } from './catalan/rhombicDodecahedron.mjs';
import { tetrakisHexahedron } from './catalan/tetrakisHexahedron.mjs';
import { triakisOctahedron } from './catalan/triakisOctahedron.mjs';
import { deltoidalIcositetrahedron } from './catalan/deltoidalIcositetrahedron.mjs';
import { rhombicTriacontahedron } from './catalan/rhombicTriacontahedron.mjs';

let catalan = {};
catalan['triakisTetrahedron'] = triakisTetrahedron;
catalan['rhombicDodecahedron'] = rhombicDodecahedron;
catalan['tetrakisHexahedron'] = tetrakisHexahedron;
catalan['triakisOctahedron'] = triakisOctahedron;
catalan['deltoidalIcositetrahedron'] = deltoidalIcositetrahedron;
catalan['rhombicTriacontahedron'] = rhombicTriacontahedron;

export {catalan};
