import { gravitywellsPoints }       from './gravitywells/gravitywellsPoints.mjs';
import { gravitywellsBasic }        from './gravitywells/gravitywellsBasic.mjs';
import { gravitywellsMajor }        from './gravitywells/gravitywellsMajor.mjs';
import { gravitywellsMinor }        from './gravitywells/gravitywellsMinor.mjs';

let gravitywells = {};
gravitywells['points']       = gravitywellsPoints;
gravitywells['basic']        = gravitywellsBasic;
gravitywells['major']        = gravitywellsMajor;
gravitywells['minor']        = gravitywellsMinor;

export { gravitywells };
