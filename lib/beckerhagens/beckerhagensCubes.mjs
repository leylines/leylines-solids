// variables
let c0 = (1+Math.sqrt(5.0))/2.0;

let beckerhagensCubes = {}
beckerhagensCubes['name'] = "Beckerhagens Cubes"
beckerhagensCubes['points'] = [[2,0,0],[c0,0,-1/c0],[c0,-1/c0,-1],[1,-1,-1],[1/c0,-1,-c0],[0,-1/c0,-c0],[0,0,-2],[0,1/c0,-c0],[1/c0,1,-c0],[1,1,-1],[c0,1/c0,-1],[c0,-1,0],[1,-c0,-1/c0],[0,-c0,-1],[-1/c0,-1,-c0],[-1,0,-c0],[-1/c0,1,-c0],[0,c0,-1],[1,c0,-1/c0],[c0,1,0],[c0,0,1/c0],[c0,-1/c0,1],[1,-1,1],[1,-c0,1/c0],[1/c0,-c0,0],[0,-2,0],[-1/c0,-c0,0],[-1,-c0,-1/c0],[-1,-1,-1],[-c0,-1/c0,-1],[-c0,0,-1/c0],[-c0,1/c0,-1],[-1,1,-1],[-1,c0,-1/c0],[-1/c0,c0,0],[0,2,0],[1/c0,c0,0],[1,c0,1/c0],[1,1,1],[c0,1/c0,1],[1,0,c0],[1/c0,-1,c0],[0,-c0,1],[-1,-c0,1/c0],[-c0,-1,0],[-2,0,0],[-c0,1,0],[-1,c0,1/c0],[0,c0,1],[1/c0,1,c0],[0,0,2],[0,-1/c0,c0],[-1/c0,-1,c0],[-1,-1,1],[-c0,-1/c0,1],[-c0,0,1/c0],[-c0,1/c0,1],[-1,1,1],[-1/c0,1,c0],[0,1/c0,c0],[1,0,-c0],[-1,0,c0]]
beckerhagensCubes['lines'] = [[22,1],[24,20],[22,3],[1,24],[20,3],[24,5],[3,26],[24,28],[5,26],[3,28],[24,51],[53,22],[26,51],[24,53],[26,22],[30,26],[28,53],[26,55],[30,53],[28,55],[7,28],[5,30],[32,28],[7,30],[5,32],[1,7],[9,3],[1,5],[7,3],[9,5],[9,32],[34,7],[36,32],[34,9],[36,7],[34,30],[32,55],[30,57],[55,34],[32,57],[36,1],[38,9],[20,36],[38,1],[20,9],[34,38],[57,36],[34,59],[57,38],[59,36],[22,38],[59,20],[51,38],[59,22],[51,20],[51,57],[55,59],[53,57],[55,51],[53,59]]

beckerhagensCubes['distance'] = 20000.0
beckerhagensCubes['color'] = [255,255,66]

export { beckerhagensCubes };