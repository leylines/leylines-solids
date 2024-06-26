// variables
let c0  = 0.192893711352359022108262546061; //phi * sqrt(3 - (x^2)) / 2
let c1  = 0.330921024729844230963655269187; //x * phi * sqrt(3 - (x^2)) / 2
let c2  = 0.374821658114562295266609516608; //phi * sqrt((x - 1 - (1/x)) * phi) / 2
let c3  = 0.567715369466921317374872062669; //(x^2) * phi * sqrt(3 - (x^2)) / 2
let c4  = 0.643029605914072573107464141441; //x * phi * sqrt((x - 1 - (1/x)) * phi) / 2
let c5  = 0.728335176957191477360671629838; //phi * sqrt(1 - x + (1 + phi) / x) / 2
let c6  = 0.847550046789060797396217956030; //phi * sqrt(x + 1 - phi) / 2
let c7  = 1.103156835071753772627281146446; //(x^2) * phi * sqrt((x - 1 - (1/x)) * phi) / 2
let c8  = 1.24950378846302719500774109632 ; //x * phi * sqrt(1 - x + (1 + phi) / x) / 2
let c9  = 1.41526541625598211477109001870 ; //sqrt((x + 2) * phi + 2) / 2 
let c10 = 1.45402422933801541929649491091 ; //x * sqrt(x * (1 + phi) - phi) / 2
let c11 = 1.64691794069037444140475745697 ; //sqrt((x^2) * (1 + 2 * phi) - phi) / 2
let c12 = 1.74618644098582634573474528789 ; //phi * sqrt((x^2) + x) / 2
let c13 = 1.97783896542021867236841272616 ; //(phi^2) * sqrt(x * (x + phi) + 1) / (2 * x)
let c14 = 2.097053835252087992403959052348; //phi * sqrt(x * (x + phi) + 1) / 2
// phi = (1 + sqrt(5)) / 2
// x = cbrt((phi + sqrt(phi-5/27))/2) + cbrt((phi - sqrt(phi-5/27))/2)

let snubDodecahedronDextro = {};
snubDodecahedronDextro['name'] = "Snub Dodecahedron (dextro)";
snubDodecahedronDextro['points'] = [[c2,c1,c14],[c2,-c1,-c14],[-c2,-c1,c14],[-c2,c1,-c14],[c14,c2,c1],[c14,-c2,-c1],[-c14,-c2,c1],[-c14,c2,-c1],[c1,c14,c2],[c1,-c14,-c2],[-c1,-c14,c2],[-c1,c14,-c2],[c3,-c4,c13],[c3,c4,-c13],[-c3,c4,c13],[-c3,-c4,-c13],[c13,-c3,c4],[c13,c3,-c4],[-c13,c3,c4],[-c13,-c3,-c4],[c4,-c13,c3],[c4,c13,-c3],[-c4,c13,c3],[-c4,-c13,-c3],[c0,c8,c12],[c0,-c8,-c12],[-c0,-c8,c12],[-c0,c8,-c12],[c12,c0,c8],[c12,-c0,-c8],[-c12,-c0,c8],[-c12,c0,-c8],[c8,c12,c0],[c8,-c12,-c0],[-c8,-c12,c0],[-c8,c12,-c0],[c7,c6,c11],[c7,-c6,-c11],[-c7,-c6,c11],[-c7,c6,-c11],[c11,c7,c6],[c11,-c7,-c6],[-c11,-c7,c6],[-c11,c7,-c6],[c6,c11,c7],[c6,-c11,-c7],[-c6,-c11,c7],[-c6,c11,-c7],[c9,-c5,c10],[c9,c5,-c10],[-c9,c5,c10],[-c9,-c5,-c10],[c10,-c9,c5],[c10,c9,-c5],[-c10,c9,c5],[-c10,-c9,-c5],[c5,-c10,c9],[c5,c10,-c9],[-c5,c10,c9],[-c5,-c10,-c9]];
snubDodecahedronDextro['lines'] = [[0,12],[12,48],[48,28],[28,36],[36,0],[1,13],[13,49],[49,29],[29,37],[37,1],[2,14],[14,50],[50,30],[30,38],[38,2],[3,15],[15,51],[51,31],[31,39],[39,3],[4,17],[17,53],[53,32],[32,40],[40,4],[5,16],[16,52],[52,33],[33,41],[41,5],[6,19],[19,55],[55,34],[34,42],[42,6],[7,18],[18,54],[54,35],[35,43],[43,7],[8,22],[22,58],[58,24],[24,44],[44,8],[9,23],[23,59],[59,25],[25,45],[45,9],[10,20],[20,56],[56,26],[26,46],[46,10],[11,21],[21,57],[57,27],[27,47],[47,11],[0,14],[2,0],[1,15],[3,1],[2,12],[3,13],[4,16],[5,4],[5,17],[6,18],[7,6],[7,19],[8,21],[11,8],[9,20],[10,9],[10,23],[11,22],[12,56],[56,48],[13,57],[57,49],[14,58],[58,50],[15,59],[59,51],[16,48],[48,52],[17,49],[49,53],[18,50],[50,54],[19,51],[51,55],[20,52],[52,56],[21,53],[53,57],[22,54],[54,58],[23,55],[55,59],[24,36],[36,44],[25,37],[37,45],[26,38],[38,46],[27,39],[39,47],[28,40],[40,36],[29,41],[41,37],[30,42],[42,38],[31,43],[43,39],[32,44],[44,40],[33,45],[45,41],[34,46],[46,42],[35,47],[47,43],[24,0],[25,1],[26,2],[27,3],[28,4],[29,5],[30,6],[31,7],[32,8],[33,9],[34,10],[35,11],[16,28],[17,29],[18,30],[19,31],[20,33],[21,32],[22,35],[23,34],[12,26],[13,27],[14,24],[15,25]];
snubDodecahedronDextro['areas'] = [[0,12,48,28,36],[1,13,49,29,37],[2,14,50,30,38],[3,15,51,31,39],[4,17,53,32,40],[5,16,52,33,41],[6,19,55,34,42],[7,18,54,35,43],[8,22,58,24,44],[9,23,59,25,45],[10,20,56,26,46],[11,21,57,27,47],[0,14,2],[1,15,3],[2,12,0],[3,13,1],[4,16,5],[5,17,4],[6,18,7],[7,19,6],[8,21,11],[9,20,10],[10,23,9],[11,22,8],[12,56,48],[13,57,49],[14,58,50],[15,59,51],[16,48,52],[17,49,53],[18,50,54],[19,51,55],[20,52,56],[21,53,57],[22,54,58],[23,55,59],[24,36,44],[25,37,45],[26,38,46],[27,39,47],[28,40,36],[29,41,37],[30,42,38],[31,43,39],[32,44,40],[33,45,41],[34,46,42],[35,47,43],[36,24,0],[37,25,1],[38,26,2],[39,27,3],[40,28,4],[41,29,5],[42,30,6],[43,31,7],[44,32,8],[45,33,9],[46,34,10],[47,35,11],[48,16,28],[49,17,29],[50,18,30],[51,19,31],[52,20,33],[53,21,32],[54,22,35],[55,23,34],[56,12,26],[57,13,27],[58,14,24],[59,15,25],[24,14,0],[25,15,1],[26,12,2],[27,13,3],[28,16,4],[29,17,5],[30,18,6],[31,19,7],[32,21,8],[33,20,9],[34,23,10],[35,22,11],[36,40,44],[37,41,45],[38,42,46],[39,43,47],[48,56,52],[49,57,53],[50,58,54],[51,59,55]];

snubDodecahedronDextro['distance'] = 40000.0;
snubDodecahedronDextro['color'] = [255,255,255];

export { snubDodecahedronDextro };
