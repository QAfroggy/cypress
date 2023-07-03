
import fullName from './name.js';
import calcAge from  './calculation/calc-age.js'
import{fullInfo} from './calculation/calc-age.js'
import { average } from './calculation/math.js';

const age = calcAge (1993,2022)
console.log(fullInfo(fullName, age) )
console.log(average([5,9,11,20,30]))