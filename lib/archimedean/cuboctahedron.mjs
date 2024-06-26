// variables
let c0 = 0.7071067811865475244008443621048; //sqrt(2) / 2

let cuboctahedron = {};
cuboctahedron['name'] = "Cuboctahedron";
cuboctahedron['points'] = [[c0,0.0,c0],[c0,0.0,-c0],[-c0,0.0,c0],[-c0,0.0,-c0],[c0,c0,0.0],[c0,-c0,0.0],[-c0,c0,0.0],[-c0,-c0,0.0],[0.0,c0,c0],[0.0,c0,-c0],[0.0,-c0,c0],[0.0,-c0,-c0]];
cuboctahedron['lines'] = [[0,5],[5,1],[1,4],[4,0],[0,8],[8,2],[2,10],[10,0],[7,2],[2,6],[6,3],[3,7],[7,11],[11,5],[5,10],[10,7],[9,1],[1,11],[11,3],[3,9],[9,6],[6,8],[8,4],[4,9]];
cuboctahedron['areas'] = [[0,5,1,4],[0,8,2,10],[7,2,6,3],[7,11,5,10],[9,1,11,3],[9,6,8,4],[0,4,8],[1,5,11],[2,7,10],[3,6,9],[4,1,9],[5,0,10],[6,2,8],[7,3,11]];

cuboctahedron['distance'] = 40000.0;
cuboctahedron['color'] = [255,255,255];

export { cuboctahedron };
