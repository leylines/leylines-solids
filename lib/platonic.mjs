import { dodecahedron } from './platonic/dodecahedron.mjs';
import { icosahedron }  from './platonic/icosahedron.mjs';
import { tetrahedron }  from './platonic/tetrahedron.mjs';
import { cube }         from './platonic/cube.mjs';
import { octahedron }  from './platonic/octahedron.mjs';

let platonic = {};
platonic['dodecahedron'] = dodecahedron;
platonic['icosahedron']  = icosahedron;
platonic['tetrahedron']  = tetrahedron;
platonic['cube']         = cube;
platonic['octahedron']   = octahedron;

export { platonic };
