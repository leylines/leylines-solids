// variables
let c0 = 1.30901699437494742410229341718 ; //(3 + sqrt(5)) / 4
let c1 = 1.61803398874989484820458683437 ; //(1 + sqrt(5)) / 2
let c2 = 1.80901699437494742410229341718 ; //(5 + sqrt(5)) / 4
let c3 = 2.11803398874989484820458683437 ; //(2 + sqrt(5)) / 2
let c4 = 2.427050983124842272306880251548; //3 * (1 + sqrt(5)) / 4
let c5 = 2.61803398874989484820458683437 ; //(3 + sqrt(5)) / 2
let c6 = 2.927050983124842272306880251548; //(5 + 3 * sqrt(5)) / 4
let c7 = 3.11803398874989484820458683437 ; //(4 + sqrt(5)) / 2
let c8 = 3.427050983124842272306880251548; //(7 + 3 * sqrt(5)) / 4
let c9 = 3.73606797749978969640917366873 ; //(3 + 2 * sqrt(5)) / 2

let truncatedIcosidodecahedron = {};
truncatedIcosidodecahedron['name'] = "Truncated Icosidodecahedron";
truncatedIcosidodecahedron['points'] = [[0.5,0.5,c9],[0.5,0.5,-c9],[0.5,-0.5,c9],[0.5,-0.5,-c9],[-0.5,0.5,c9],[-0.5,0.5,-c9],[-0.5,-0.5,c9],[-0.5,-0.5,-c9],[c9,0.5,0.5],[c9,0.5,-0.5],[c9,-0.5,0.5],[c9,-0.5,-0.5],[-c9,0.5,0.5],[-c9,0.5,-0.5],[-c9,-0.5,0.5],[-c9,-0.5,-0.5],[0.5,c9,0.5],[0.5,c9,-0.5],[0.5,-c9,0.5],[0.5,-c9,-0.5],[-0.5,c9,0.5],[-0.5,c9,-0.5],[-0.5,-c9,0.5],[-0.5,-c9,-0.5],[1.0,c0,c8],[1.0,c0,-c8],[1.0,-c0,c8],[1.0,-c0,-c8],[-1.0,c0,c8],[-1.0,c0,-c8],[-1.0,-c0,c8],[-1.0,-c0,-c8],[c8,1.0,c0],[c8,1.0,-c0],[c8,-1.0,c0],[c8,-1.0,-c0],[-c8,1.0,c0],[-c8,1.0,-c0],[-c8,-1.0,c0],[-c8,-1.0,-c0],[c0,c8,1.0],[c0,c8,-1.0],[c0,-c8,1.0],[c0,-c8,-1.0],[-c0,c8,1.0],[-c0,c8,-1.0],[-c0,-c8,1.0],[-c0,-c8,-1.0],[0.5,c3,c7],[0.5,c3,-c7],[0.5,-c3,c7],[0.5,-c3,-c7],[-0.5,c3,c7],[-0.5,c3,-c7],[-0.5,-c3,c7],[-0.5,-c3,-c7],[c7,0.5,c3],[c7,0.5,-c3],[c7,-0.5,c3],[c7,-0.5,-c3],[-c7,0.5,c3],[-c7,0.5,-c3],[-c7,-0.5,c3],[-c7,-0.5,-c3],[c3,c7,0.5],[c3,c7,-0.5],[c3,-c7,0.5],[c3,-c7,-0.5],[-c3,c7,0.5],[-c3,c7,-0.5],[-c3,-c7,0.5],[-c3,-c7,-0.5],[c2,c1,c6],[c2,c1,-c6],[c2,-c1,c6],[c2,-c1,-c6],[-c2,c1,c6],[-c2,c1,-c6],[-c2,-c1,c6],[-c2,-c1,-c6],[c6,c2,c1],[c6,c2,-c1],[c6,-c2,c1],[c6,-c2,-c1],[-c6,c2,c1],[-c6,c2,-c1],[-c6,-c2,c1],[-c6,-c2,-c1],[c1,c6,c2],[c1,c6,-c2],[c1,-c6,c2],[c1,-c6,-c2],[-c1,c6,c2],[-c1,c6,-c2],[-c1,-c6,c2],[-c1,-c6,-c2],[c0,c4,c5],[c0,c4,-c5],[c0,-c4,c5],[c0,-c4,-c5],[-c0,c4,c5],[-c0,c4,-c5],[-c0,-c4,c5],[-c0,-c4,-c5],[c5,c0,c4],[c5,c0,-c4],[c5,-c0,c4],[c5,-c0,-c4],[-c5,c0,c4],[-c5,c0,-c4],[-c5,-c0,c4],[-c5,-c0,-c4],[c4,c5,c0],[c4,c5,-c0],[c4,-c5,c0],[c4,-c5,-c0],[-c4,c5,c0],[-c4,c5,-c0],[-c4,-c5,c0],[-c4,-c5,-c0]];
truncatedIcosidodecahedron['lines'] = [[0,2],[2,26],[26,74],[74,106],[106,58],[58,56],[56,104],[104,72],[72,24],[24,0],[1,25],[25,73],[73,105],[105,57],[57,59],[59,107],[107,75],[75,27],[27,3],[3,1],[4,28],[28,76],[76,108],[108,60],[60,62],[62,110],[110,78],[78,30],[30,6],[6,4],[5,7],[7,31],[31,79],[79,111],[111,63],[63,61],[61,109],[109,77],[77,29],[29,5],[8,9],[9,33],[33,81],[81,113],[113,65],[65,64],[64,112],[112,80],[80,32],[32,8],[10,34],[34,82],[82,114],[114,66],[66,67],[67,115],[115,83],[83,35],[35,11],[11,10],[12,36],[36,84],[84,116],[116,68],[68,69],[69,117],[117,85],[85,37],[37,13],[13,12],[14,15],[15,39],[39,87],[87,119],[119,71],[71,70],[70,118],[118,86],[86,38],[38,14],[16,20],[20,44],[44,92],[92,100],[100,52],[52,48],[48,96],[96,88],[88,40],[40,16],[17,41],[41,89],[89,97],[97,49],[49,53],[53,101],[101,93],[93,45],[45,21],[21,17],[18,42],[42,90],[90,98],[98,50],[50,54],[54,102],[102,94],[94,46],[46,22],[22,18],[19,23],[23,47],[47,95],[95,103],[103,55],[55,51],[51,99],[99,91],[91,43],[43,19],[24,48],[52,28],[4,0],[1,5],[29,53],[49,25],[2,6],[30,54],[50,26],[27,51],[55,31],[7,3],[32,56],[58,34],[10,8],[9,11],[35,59],[57,33],[12,14],[38,62],[60,36],[37,61],[63,39],[15,13],[40,64],[65,41],[17,16],[18,19],[43,67],[66,42],[20,21],[45,69],[68,44],[46,70],[71,47],[23,22],[104,80],[112,88],[96,72],[73,97],[89,113],[81,105],[74,98],[90,114],[82,106],[107,83],[115,91],[99,75],[76,100],[92,116],[84,108],[109,85],[117,93],[101,77],[110,86],[118,94],[102,78],[79,103],[95,119],[87,111]];
truncatedIcosidodecahedron['areas'] = [[0,2,26,74,106,58,56,104,72,24],[1,25,73,105,57,59,107,75,27,3],[4,28,76,108,60,62,110,78,30,6],[5,7,31,79,111,63,61,109,77,29],[8,9,33,81,113,65,64,112,80,32],[10,34,82,114,66,67,115,83,35,11],[12,36,84,116,68,69,117,85,37,13],[14,15,39,87,119,71,70,118,86,38],[16,20,44,92,100,52,48,96,88,40],[17,41,89,97,49,53,101,93,45,21],[18,42,90,98,50,54,102,94,46,22],[19,23,47,95,103,55,51,99,91,43],[0,24,48,52,28,4],[1,5,29,53,49,25],[2,6,30,54,50,26],[3,27,51,55,31,7],[8,32,56,58,34,10],[9,11,35,59,57,33],[12,14,38,62,60,36],[13,37,61,63,39,15],[16,40,64,65,41,17],[18,19,43,67,66,42],[20,21,45,69,68,44],[22,46,70,71,47,23],[72,104,80,112,88,96],[73,97,89,113,81,105],[74,98,90,114,82,106],[75,107,83,115,91,99],[76,100,92,116,84,108],[77,109,85,117,93,101],[78,110,86,118,94,102],[79,103,95,119,87,111],[0,4,6,2],[1,3,7,5],[8,10,11,9],[12,13,15,14],[16,17,21,20],[18,22,23,19],[24,72,96,48],[25,49,97,73],[26,50,98,74],[27,75,99,51],[28,52,100,76],[29,77,101,53],[30,78,102,54],[31,55,103,79],[32,80,104,56],[33,57,105,81],[34,58,106,82],[35,83,107,59],[36,60,108,84],[37,85,109,61],[38,86,110,62],[39,63,111,87],[40,88,112,64],[41,65,113,89],[42,66,114,90],[43,91,115,67],[44,68,116,92],[45,93,117,69],[46,94,118,70],[47,71,119,95]];

truncatedIcosidodecahedron['distance'] = 40000.0;
truncatedIcosidodecahedron['color'] = [255,255,255];

export { truncatedIcosidodecahedron };