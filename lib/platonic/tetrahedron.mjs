// variables
let c0 = 0.353553390593273762200422181052; //sqrt(2) / 4

let tetrahedron = {};
tetrahedron['name'] = "Tetrahedron";
tetrahedron['points'] = [[c0,-c0,c0],[c0,c0,-c0],[-c0,c0,c0],[-c0,-c0,-c0]];
tetrahedron['lines'] = [[0,1],[1,2],[2,0],[0,3],[3,1],[2,3]];
tetrahedron['areas'] = [[0,1,2],[1,0,3],[2,3,0],[3,2,1]];

tetrahedron['distance'] = 20000.0;
tetrahedron['color'] = [255,255,255];

export { tetrahedron };
