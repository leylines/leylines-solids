import { beckerhagensPoints }       from './beckerhagens/beckerhagensPoints.mjs';
import { beckerhagensBasic }        from './beckerhagens/beckerhagensBasic.mjs';
import { beckerhagensTetrahedrons } from './beckerhagens/beckerhagensTetrahedrons.mjs';
import { beckerhagensCubes }        from './beckerhagens/beckerhagensCubes.mjs';
import { beckerhagensYin }          from './beckerhagens/beckerhagensYin.mjs';
import { beckerhagensYang }         from './beckerhagens/beckerhagensYang.mjs';
import { beckerhagensBalance }      from './beckerhagens/beckerhagensBalance.mjs';

let beckerhagens = {};
beckerhagens['points']       = beckerhagensPoints;
beckerhagens['basic']        = beckerhagensBasic;
beckerhagens['tetrahedrons'] = beckerhagensTetrahedrons;
beckerhagens['cubes']        = beckerhagensCubes;
beckerhagens['yin']          = beckerhagensYin;
beckerhagens['yang']         = beckerhagensYang;
beckerhagens['balance']      = beckerhagensBalance;

export { beckerhagens };
