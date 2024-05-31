// variables
let c0 = 0.7071067811865475244008443621048; //sqrt(2) / 2

let octahedron = {};
octahedron['name'] = "Octahedron";
octahedron['points'] = [[0.0,0.0,c0],[0.0,0.0,-c0],[c0,0.0,0.0],[-c0,0.0,0.0],[0.0,c0,0.0],[0.0,-c0,0.0]];
octahedron['lines'] = [[0,2],[2,4],[4,0],[4,3],[3,0],[3,5],[5,0],[5,2],[1,2],[5,1],[3,1],[4,1]];
octahedron['areas'] = [[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]];

octahedron['distance'] = 20000.0;
octahedron['color'] = [255,255,255];

export { octahedron };
