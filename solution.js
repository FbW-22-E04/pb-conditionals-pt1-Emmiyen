let int1 = 66;
let int2 = 35;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int1 <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

let int3 = 77;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int1 <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

const a = 40;
const b = 69;
const c = 55;

console.log(Math.max(a, b, c));
console.log(Math.max(int1, int2, int3));

const str = "thagoras";
const addStr = "Py";
console.log(addStr + str);

const int1and2 = int1 + int2;

console.log(int1and2);

if (int2 >= 50 && int1 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

const int4 = 5;
const int5 = 3;
const int4and6 = int4 + int5;
Math.abs(int4, int5);

if (int4 + int5 == 8 || int4 - int5 == 8 || int5 - int4 == 8) {
  console.log(true);
} else {
  console.log(false);
}


if (int4 % 7 == 0 || int4 % 11 == 0 || int5 % 7 == 0) {
  console.log(true);
} else {
  console.log(false);
}

if (int4 == int5){
    console.log((int4 + int5) *3);
}else{
    console.log(int4 + int5);
}

if (int5 > 19 ){
    console.log(2 * (int5 - 19));
}else {
    console.log(19 - int5);
}


const firstName = 'Danica';
let age = 28;

if (age < 13){
    console.log(firstName, 'is a child');
}else if (age >= 13 && age < 20){
   console.log(firstName, 'is a teenager');
}else if (age >= 20 && age < 30){
    console.log(firstName, 'is a young adult');
}else{
    console.log(firstName, 'is an adult.');
}


