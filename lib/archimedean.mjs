import { truncatedTetrahedron } from './archimedean/truncatedTetrahedron.mjs';
import { cuboctahedron } from './archimedean/cuboctahedron.mjs';
import { truncatedOctahedron } from './archimedean/truncatedOctahedron.mjs';
import { truncatedCube } from './archimedean/truncatedCube.mjs';
import { rhombicuboctahedron } from './archimedean/rhombicuboctahedron.mjs';
import { snubCubeLaevo } from './archimedean/snubCubeLaevo.mjs';
import { snubCubeDextro } from './archimedean/snubCubeDextro.mjs';
import { icosidodecahedron } from './archimedean/icosidodecahedron.mjs';
import { truncatedCuboctahedron } from './archimedean/truncatedCuboctahedron.mjs';
import { truncatedIcosahedron } from './archimedean/truncatedIcosahedron.mjs';
import { truncatedDodecahedron } from './archimedean/truncatedDodecahedron.mjs';
import { rhombicosidodecahedron } from './archimedean/rhombicosidodecahedron.mjs';

let archimedean = {};
archimedean['truncatedTetrahedron'] = truncatedTetrahedron;
archimedean['cuboctahedron'] = cuboctahedron;
archimedean['truncatedOctahedron'] = truncatedOctahedron;
archimedean['truncatedCube'] = truncatedCube;
archimedean['rhombicuboctahedron'] = rhombicuboctahedron;
archimedean['snubCubeLaevo'] = snubCubeLaevo;
archimedean['snubCubeDextro'] = snubCubeDextro;
archimedean['icosidodecahedron'] = icosidodecahedron;
archimedean['truncatedCuboctahedron'] = truncatedCuboctahedron;
archimedean['truncatedIcosahedron'] = truncatedIcosahedron;
archimedean['truncatedDodecahedron'] = truncatedDodecahedron;
archimedean['rhombicosidodecahedron'] = rhombicosidodecahedron;

export { archimedean };
