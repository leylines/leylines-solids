// variables
let c0 = 0.809016994374947424102293417183; //(1 + sqrt(5)) / 4
let c1 = 1.61803398874989484820458683437 ; //(1 + sqrt(5)) / 2
let c2 = 1.80901699437494742410229341718 ; //(5 + sqrt(5)) / 4
let c3 = 2.11803398874989484820458683437 ; //(2 + sqrt(5)) / 2
let c4 = 2.427050983124842272306880251548; //3 * (1 + sqrt(5)) / 4

let truncatedIcosahedron = {};
truncatedIcosahedron['name'] = "Truncated Icosahedron";
truncatedIcosahedron['points'] = [[0.5,0.0,c4],[0.5,0.0,-c4],[-0.5,0.0,c4],[-0.5,0.0,-c4],[c4,0.5,0.0],[c4,-0.5,0.0],[-c4,0.5,0.0],[-c4,-0.5,0.0],[0.0,c4,0.5],[0.0,c4,-0.5],[0.0,-c4,0.5],[0.0,-c4,-0.5],[1.0,c0,c3],[1.0,c0,-c3],[1.0,-c0,c3],[1.0,-c0,-c3],[-1.0,c0,c3],[-1.0,c0,-c3],[-1.0,-c0,c3],[-1.0,-c0,-c3],[c3,1.0,c0],[c3,1.0,-c0],[c3,-1.0,c0],[c3,-1.0,-c0],[-c3,1.0,c0],[-c3,1.0,-c0],[-c3,-1.0,c0],[-c3,-1.0,-c0],[c0,c3,1.0],[c0,c3,-1.0],[c0,-c3,1.0],[c0,-c3,-1.0],[-c0,c3,1.0],[-c0,c3,-1.0],[-c0,-c3,1.0],[-c0,-c3,-1.0],[0.5,c1,c2],[0.5,c1,-c2],[0.5,-c1,c2],[0.5,-c1,-c2],[-0.5,c1,c2],[-0.5,c1,-c2],[-0.5,-c1,c2],[-0.5,-c1,-c2],[c2,0.5,c1],[c2,0.5,-c1],[c2,-0.5,c1],[c2,-0.5,-c1],[-c2,0.5,c1],[-c2,0.5,-c1],[-c2,-0.5,c1],[-c2,-0.5,-c1],[c1,c2,0.5],[c1,c2,-0.5],[c1,-c2,0.5],[c1,-c2,-0.5],[-c1,c2,0.5],[-c1,c2,-0.5],[-c1,-c2,0.5],[-c1,-c2,-0.5]];
truncatedIcosahedron['lines'] = [[0,2],[2,18],[18,42],[42,38],[38,14],[14,0],[1,3],[3,17],[17,41],[41,37],[37,13],[13,1],[0,12],[12,36],[36,40],[40,16],[16,2],[1,15],[15,39],[39,43],[43,19],[19,3],[4,5],[5,23],[23,47],[47,45],[45,21],[21,4],[4,20],[20,44],[44,46],[46,22],[22,5],[6,7],[7,26],[26,50],[50,48],[48,24],[24,6],[6,25],[25,49],[49,51],[51,27],[27,7],[8,9],[9,33],[33,57],[57,56],[56,32],[32,8],[8,28],[28,52],[52,53],[53,29],[29,9],[10,11],[11,31],[31,55],[55,54],[54,30],[30,10],[10,34],[34,58],[58,59],[59,35],[35,11],[12,44],[20,52],[28,36],[37,29],[53,21],[45,13],[38,30],[54,22],[46,14],[15,47],[23,55],[31,39],[40,32],[56,24],[48,16],[17,49],[25,57],[33,41],[18,50],[26,58],[34,42],[43,35],[59,27],[51,19]];
truncatedIcosahedron['areas'] = [[0,2,18,42,38,14],[1,3,17,41,37,13],[2,0,12,36,40,16],[3,1,15,39,43,19],[4,5,23,47,45,21],[5,4,20,44,46,22],[6,7,26,50,48,24],[7,6,25,49,51,27],[8,9,33,57,56,32],[9,8,28,52,53,29],[10,11,31,55,54,30],[11,10,34,58,59,35],[12,44,20,52,28,36],[13,37,29,53,21,45],[14,38,30,54,22,46],[15,47,23,55,31,39],[16,40,32,56,24,48],[17,49,25,57,33,41],[18,50,26,58,34,42],[19,43,35,59,27,51],[0,14,46,44,12],[1,13,45,47,15],[2,16,48,50,18],[3,19,51,49,17],[4,21,53,52,20],[5,22,54,55,23],[6,24,56,57,25],[7,27,59,58,26],[8,32,40,36,28],[9,29,37,41,33],[10,30,38,42,34],[11,35,43,39,31]];

truncatedIcosahedron['distance'] = 20000.0;
truncatedIcosahedron['color'] = [255,255,255];

export { truncatedIcosahedron };