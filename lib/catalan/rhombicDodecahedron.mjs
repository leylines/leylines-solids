// variables
let c0 = 0.530330085889910643300633271579; //3 * sqrt(2) / 8
let c1 = 1.06066017177982128660126654316 ; //3 * sqrt(2) / 4

let rhombicDodecahedron = {};
rhombicDodecahedron['name'] = "Rhombic Dodecahedron";
rhombicDodecahedron['points'] = [[0.0,0.0,c1],[0.0,0.0,-c1],[c1,0.0,0.0],[-c1,0.0,0.0],[0.0,c1,0.0],[0.0,-c1,0.0],[c0,c0,c0],[c0,c0,-c0],[c0,-c0,c0],[c0,-c0,-c0],[-c0,c0,c0],[-c0,c0,-c0],[-c0,-c0,c0],[-c0,-c0,-c0]];
rhombicDodecahedron['lines'] = [[6,0],[0,8],[8,2],[2,6],[2,7],[7,4],[4,6],[4,10],[10,0],[9,1],[1,7],[2,9],[8,5],[5,9],[5,13],[13,1],[11,1],[13,3],[3,11],[3,10],[4,11],[12,0],[3,12],[5,12]];
rhombicDodecahedron['areas'] = [[6,0,8,2],[6,2,7,4],[6,4,10,0],[9,1,7,2],[9,2,8,5],[9,5,13,1],[11,1,13,3],[11,3,10,4],[11,4,7,1],[12,0,10,3],[12,3,13,5],[12,5,8,0]];

rhombicDodecahedron['distance'] = 20000.0;
rhombicDodecahedron['color'] = [255,255,255];

export { rhombicDodecahedron };
