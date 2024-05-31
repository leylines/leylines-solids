// variables
let c0 = 0.353553390593273762200422181052; //sqrt(2) / 4
let c1 = 1.06066017177982128660126654316 ; //3 * sqrt(2) / 4

let truncatedTetrahedron = {};
truncatedTetrahedron['name'] = "Truncated Tetrahedron";
truncatedTetrahedron['points'] = [[c0,-c0,c1],[c0,c0,-c1],[-c0,c0,c1],[-c0,-c0,-c1],[c1,-c0,c0],[c1,c0,-c0],[-c1,c0,c0],[-c1,-c0,-c0],[c0,-c1,c0],[c0,c1,-c0],[-c0,c1,c0],[-c0,-c1,-c0]];
truncatedTetrahedron['lines'] = [[0,4],[4,5],[5,9],[9,10],[10,2],[2,0],[1,5],[4,8],[8,11],[11,3],[3,1],[2,6],[6,7],[7,11],[8,0],[3,7],[6,10],[9,1]];
truncatedTetrahedron['areas'] = [[0,4,5,9,10,2],[1,5,4,8,11,3],[2,6,7,11,8,0],[3,7,6,10,9,1],[0,8,4],[1,9,5],[2,10,6],[3,11,7]];

truncatedTetrahedron['distance'] = 20000.0;
truncatedTetrahedron['color'] = [255,255,255];

export { truncatedTetrahedron };
