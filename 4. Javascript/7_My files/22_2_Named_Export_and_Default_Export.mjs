import defaultExported, {a, b, c, d} from './22_1_Named_Export_and_Default_Export.mjs';
import * as data from './22_1_Named_Export_and_Default_Export.mjs'

console.log(defaultExported);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(data.a);
console.log(data.b);
console.log(data.c);
console.log(data.d);
