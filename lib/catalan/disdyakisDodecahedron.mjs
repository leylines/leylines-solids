// variables
let c0 = 1.41421356237309504880168872421; //sqrt(2)
let c1 = 1.64075448203408147040144747789; //(3 + 6 * sqrt(2)) / 7
let c2 = 2.67541743733683649131645693113; //(6 + 9 * sqrt(2)) / 7

let disdyakisDodecahedron = {};
disdyakisDodecahedron['name'] = "Disdyakis Dodecahedron";
disdyakisDodecahedron['points'] = [[0.0,0.0,c2],[0.0,0.0,-c2],[c2,0.0,0.0],[-c2,0.0,0.0],[0.0,c2,0.0],[0.0,-c2,0.0],[c1,0.0,c1],[c1,0.0,-c1],[-c1,0.0,c1],[-c1,0.0,-c1],[c1,c1,0.0],[c1,-c1,0.0],[-c1,c1,0.0],[-c1,-c1,0.0],[0.0,c1,c1],[0.0,c1,-c1],[0.0,-c1,c1],[0.0,-c1,-c1],[c0,c0,c0],[c0,c0,-c0],[c0,-c0,c0],[c0,-c0,-c0],[-c0,c0,c0],[-c0,c0,-c0],[-c0,-c0,c0],[-c0,-c0,-c0]];
disdyakisDodecahedron['lines'] = [[0,6],[6,18],[18,0],[18,14],[14,0],[14,22],[22,0],[22,8],[8,0],[8,24],[24,0],[24,16],[16,0],[16,20],[20,0],[20,6],[1,7],[7,21],[21,1],[21,17],[17,1],[17,25],[25,1],[25,9],[9,1],[9,23],[23,1],[23,15],[15,1],[15,19],[19,1],[19,7],[2,6],[20,2],[20,11],[11,2],[11,21],[21,2],[7,2],[19,2],[19,10],[10,2],[10,18],[18,2],[3,8],[22,3],[22,12],[12,3],[12,23],[23,3],[9,3],[25,3],[25,13],[13,3],[13,24],[24,3],[4,10],[19,4],[15,4],[23,4],[12,4],[22,4],[14,4],[18,4],[5,11],[20,5],[16,5],[24,5],[13,5],[25,5],[17,5],[21,5]];
disdyakisDodecahedron['areas'] = [[0,6,18],[0,18,14],[0,14,22],[0,22,8],[0,8,24],[0,24,16],[0,16,20],[0,20,6],[1,7,21],[1,21,17],[1,17,25],[1,25,9],[1,9,23],[1,23,15],[1,15,19],[1,19,7],[2,6,20],[2,20,11],[2,11,21],[2,21,7],[2,7,19],[2,19,10],[2,10,18],[2,18,6],[3,8,22],[3,22,12],[3,12,23],[3,23,9],[3,9,25],[3,25,13],[3,13,24],[3,24,8],[4,10,19],[4,19,15],[4,15,23],[4,23,12],[4,12,22],[4,22,14],[4,14,18],[4,18,10],[5,11,20],[5,20,16],[5,16,24],[5,24,13],[5,13,25],[5,25,17],[5,17,21],[5,21,11]];

disdyakisDodecahedron['distance'] = 40000.0;
disdyakisDodecahedron['color'] = [255,255,255];

export { disdyakisDodecahedron };