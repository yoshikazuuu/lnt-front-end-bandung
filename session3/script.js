// TIPE DATA DALAM JAVASCRIPT

// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Object

let angka = 10;
let string = "Halo";
let boolean = true;
let kosong;
let null_var = null;
let object = {};

// VARIABLE DALAM JAVASCRIPT

// 1. var (tidak merekomendasikan)
// 2. let
// 3. const

let nama = "Jerry"; // mutable
const nama_const = "Jerry"; // immutable
const pi = 3.14; // immutable

nama = "Tom";
// nama_const = "Tom"; // error

console.log(nama, nama_const, angka);

// OBJECT DALAM JAVASCRIPT

let orang = {
  nama: "Jerry",
  umur: 19,
  alamat: {
    jalan: "Boulevard",
    kota: "Jakarta",
  },
};

console.log(orang.nama, orang.umur, orang.alamat.jalan, orang.alamat.kota);

// OPERASI MATEMATIKA DALAM JAVASCRIPT

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
console.log(a ** b); // 1000

// OPERASI PERBANDINGAN DALAM JAVASCRIPT

// let a = 10;
// let b = 3;

console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); // true

// uniknya dalam javascript

let c = 10;
let d = 10;

console.log("string vs number: ", c !== d);

// OPERASI LOGIKA DALAM JAVASCRIPT

// let a = 10;
// let b = 3;

console.log(a > 0 && b > 0); // true
console.log(a > 0 || b > 0); // true
console.log(!(a > 0)); // false

// PERCABANGAN DALAM JAVASCRIPT

b = 20;

if (a > b) {
  console.log("a lebih besar dari b");
} else {
  console.log("a lebih kecil dari b");
}

let day = 1;

switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Hari tidak valid");
}

// PERULANGAN DALAM JAVASCRIPT

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// Array adalah kumpulan dari beberapa data
let fruits = ["apel", "pisang", "mangga"];

fruits.push("jeruk");

fruits.forEach((buah) => {
  console.log(buah);
});

// FUNGSI DALAM JAVASCRIPT

// function penjelasData(nama, umur, alamat) {
//   console.log("Nama: ", nama);
//   console.log("Umur: ", umur);
//   console.log("Alamat: ", alamat);
// }

// penjelasData("Jerry", 19, "Jakarta");
// penjelasData("Tom", 20, "Jakarta");

// FUNGSI ANONIM DALAM JAVASCRIPT

let sum = (a, b) => {
  return a + b;
};

let hello = () => {
  console.log("Hello World");
};

console.log(sum(10, 3)); // 13
hello(); // Hello World
