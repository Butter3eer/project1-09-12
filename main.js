console.log(1 + 9);
console.log(1 - 9);
console.log(1 * 9);
console.log(1 / 9);
console.log(12 % 9);

console.log("---------------------------------")

console.log(Math.random());
console.log(Math.round(0.5));
console.log(Math.floor(0.5));
console.log(Math.ceil(0.5));
console.log(Math.sqrt(9));

console.log("----------------------------------")

console.log('asdf' + 'jdbhf');
console.log('asdf' + 45);
console.log('12' + 45);
console.log('12' - 45);

console.log("----------------------------------")

console.log(parseInt("12 éves vagyok"));

console.log("----------------------------------")

console.log(34 < 78);
console.log(-78.4 >= 0);

console.log('---------------------------------')

console.log(1 > 0 && 4 < 6);
console.log(1 > 0 || 4 < 6);
console.log(!true);

console.log("---------------------------------")

console.log('asdf' == 'asdf');
console.log('asdf' != 'asdf');
console.log(12 == '12');
console.log(12 === '12');
console.log(12 !== '12');

console.log("---------------------------------")

console.log(true == 1);
console.log('' == 0);
console.log('1' == 1);
console.log('' == false);

console.log("---------------------------------");

console.log('0' == 0);
console.log('' == 0);
console.log('0' == '');

console.log("---------------------------------");

let a = 1; //Literál
console.log(a);

a = true;
console.log(a);

a = 'szoveg<;';
console.log(a);

a = [true, 456, 'asdf'];
console.log(a);

console.log("---------------------------------");

let x = 5;
let y = 2;

if (true) console.log("Igaz")
if (x > y) { console.log("Igaz 2"); }
if (x > y) { console.log("X nagyobb mint Y"); }

else if ( x == y) { console.log("X és Y egyenlő"); }

else { console.log("Y nagyobb"); }

console.log( (x >= y)? ">=":"<" ); //()?:function()

console.log("---------------------------------");

let nap = getRandomArbitrary(1, 7);

console.log("A mai nap sorszáma: " + nap);

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min) + min);
}

console.log("----------------------------------");

switch (nap) {
    case 1: console.log("Hétfő (" + nap + ")"); break;
    case 2: console.log("Kedd (" + nap + ")"); break;
    case 3: console.log("Szerda (" + nap + ")"); break;
    case 4: console.log("Csütörtök (" + nap + ")"); break;
    case 5: console.log("Péntek (" + nap + ")"); break;
    case 6: console.log("Szombat (" + nap + ")"); break;
    case 7: console.log("Vasárnap (" + nap + ")"); break;
    default: console.log("Nincs ilyen nap..."); break;
}
  
console.log("----------------------------------");

let tomb = [ 1, 5, 10, -5, 3 ];
for (let i = 0; i < tomb.length; i++) {
    const element = tomb[i];
    console.log(tomb[i]);
}

console.log("----------------------------------");

i = 0;
do 
{ 
    console.log(tomb[i]);
    i++; 
} 
while (i < tomb.length)

console.log("---------------------------------");

i = 0;
while (i < tomb.length) 
{
    console.log(tomb[i]);
    i++; 
}