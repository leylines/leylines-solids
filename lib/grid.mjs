import { gridPoints }         from './grid/gridPoints.mjs';
import { gridMajor }          from './grid/gridMajor.mjs';
import { gridBasic }          from './grid/gridBasic.mjs';
import { gridMinor }          from './grid/gridMinor.mjs';

let grid = {};
grid['points']       = gridPoints;
grid['major']        = gridMajor;
grid['basic']        = gridBasic;
grid['minor']        = gridMinor;

export { grid };
