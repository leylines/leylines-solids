// variables
let c0 = 0.559016994374947424102293417183; //sqrt(5) / 4
let c1 = 0.904508497187473712051146708591; //(5 + sqrt(5)) / 8
let c2 = 1.46352549156242113615344012577 ; //(5 + 3 * sqrt(5)) / 8

let rhombicTriacontahedron = {};
rhombicTriacontahedron['name'] = "Rhombic Triacontahedron";
rhombicTriacontahedron['points'] = [[c1,0.0,c2],[c1,0.0,-c2],[-c1,0.0,c2],[-c1,0.0,-c2],[c2,c1,0.0],[c2,-c1,0.0],[-c2,c1,0.0],[-c2,-c1,0.0],[0.0,c2,c1],[0.0,c2,-c1],[0.0,-c2,c1],[0.0,-c2,-c1],[0.0,c0,c2],[0.0,c0,-c2],[0.0,-c0,c2],[0.0,-c0,-c2],[c2,0.0,c0],[c2,0.0,-c0],[-c2,0.0,c0],[-c2,0.0,-c0],[c0,c2,0.0],[c0,-c2,0.0],[-c0,c2,0.0],[-c0,-c2,0.0],[c1,c1,c1],[c1,c1,-c1],[c1,-c1,c1],[c1,-c1,-c1],[-c1,c1,c1],[-c1,c1,-c1],[-c1,-c1,c1],[-c1,-c1,-c1]];
rhombicTriacontahedron['lines'] = [[0,12],[12,2],[2,14],[14,0],[14,10],[10,26],[26,0],[26,5],[5,16],[16,0],[1,13],[13,9],[9,25],[25,1],[25,4],[4,17],[17,1],[17,5],[5,27],[27,1],[2,28],[28,6],[6,18],[18,2],[18,7],[7,30],[30,2],[30,10],[3,19],[19,6],[6,29],[29,3],[29,9],[13,3],[1,15],[15,3],[4,20],[20,8],[8,24],[24,4],[24,0],[16,4],[19,7],[3,31],[31,7],[31,11],[11,23],[23,7],[8,22],[22,6],[28,8],[12,8],[22,9],[20,9],[23,10],[11,21],[21,10],[21,5],[15,11],[27,11]];
rhombicTriacontahedron['areas'] = [[0,12,2,14],[0,14,10,26],[0,26,5,16],[1,13,9,25],[1,25,4,17],[1,17,5,27],[2,28,6,18],[2,18,7,30],[2,30,10,14],[3,19,6,29],[3,29,9,13],[3,13,1,15],[4,20,8,24],[4,24,0,16],[4,16,5,17],[7,18,6,19],[7,19,3,31],[7,31,11,23],[8,22,6,28],[8,28,2,12],[8,12,0,24],[9,29,6,22],[9,22,8,20],[9,20,4,25],[10,30,7,23],[10,23,11,21],[10,21,5,26],[11,31,3,15],[11,15,1,27],[11,27,5,21]];

rhombicTriacontahedron['distance'] = 20000.0;
rhombicTriacontahedron['color'] = [255,255,255];

export { rhombicTriacontahedron };