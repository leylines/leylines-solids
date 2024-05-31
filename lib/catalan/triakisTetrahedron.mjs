// variables
let c0 = 0.636396103067892771960759925894; //9 * sqrt(2) / 20
let c1 = 1.06066017177982128660126654316 ; //3 * sqrt(2) / 4

let triakisTetrahedron = {};
triakisTetrahedron['name'] = "Triakis Tetrahedron";
triakisTetrahedron['points'] = [[c1,c1,c1],[c1,-c1,-c1],[-c1,-c1,c1],[-c1,c1,-c1],[c0,-c0,c0],[c0,c0,-c0],[-c0,c0,c0],[-c0,-c0,-c0]];
triakisTetrahedron['lines'] = [[4,0],[0,2],[2,4],[2,1],[1,4],[1,0],[5,0],[1,5],[1,3],[3,5],[3,0],[6,0],[3,6],[3,2],[2,6],[7,1],[2,7],[3,7]];
triakisTetrahedron['areas'] = [[4,0,2],[4,2,1],[4,1,0],[5,0,1],[5,1,3],[5,3,0],[6,0,3],[6,3,2],[6,2,0],[7,1,2],[7,2,3],[7,3,1]];

triakisTetrahedron['distance'] = 20000.0;
triakisTetrahedron['color'] = [255,255,255];

export { triakisTetrahedron };
