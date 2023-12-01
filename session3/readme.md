# JavaScript untuk Pengembangan Web

## Daftar Isi

- [Pendahuluan](#pendahuluan)
- [Dasar-Dasar](#dasar-dasar)
  - [Tipe Data](#tipe-data)
  - [Variabel](#variabel)
  - [Object](#object)
  - [Operasi Aritmatika](#operasi-aritmatika)
  - [Operasi Perbandingan](#operasi-perbandingan)
  - [Operasi Logika](#operasi-logika)
  - [Percabangan](#percabangan)
  - [Perulangan](#perulangan)
- [Fungsi](#fungsi)
- [Modul](#modul)
- [Arrow Functions](#arrow-functions)
- [Manipulasi DOM](#manipulasi-dom)
- [Fetch API](#fetch-api)

## Pendahuluan

<p align="center">
  <img src="image.png">
</p>

JavaScript merupakan bahasa yang sangat penting dalam pengembangan web. Bahasa ini memungkinkan penambahan interaktivitas dan perilaku dinamis pada situs web. Panduan ini memberikan gambaran umum tentang konsep dan fitur JavaScript yang penting untuk membangun situs web modern.

Javascript berjalan di sisi klien (client-side), artinya kode dieksekusi di browser pengguna. Ini berbeda dengan bahasa pemrograman server-side seperti PHP, Python, dan Ruby yang dieksekusi di server.

Javascript berjalan menggunakan V8 engine yang dikembangkan oleh Google. V8 juga digunakan oleh Node.js untuk menjalankan Javascript di sisi server.

## Dasar-Dasar

Untuk menggunakan JavaScript di halaman HTML, Anda cukup menyertakannya dengan tag `<script>`:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <!-- konten halaman -->
  </body>
</html>
```

Anda juga dapat menulis JavaScript langsung di file HTML dengan menempatkannya di antara tag `<script>` dan `</script>`.

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      console.log("Halo Dunia");
    </script>
  </head>
  <body>
    <!-- konten halaman -->
  </body>
</html>
```

### Tipe Data

JavaScript memiliki beberapa tipe data utama:

- **Number**: bilangan bulat dan desimal, contoh: `10`, `3.14`
- **String**: teks, contoh: `"Halo Dunia"`
- **Boolean**: nilai `benar` atau `salah`
- **Undefined**: variabel yang dideklarasikan tanpa nilai yang ditetapkan
- **Null**: nilai kosong atau tidak ada

```js
let count = 10; // Number
let name = "John"; // String
let isAdmin = false; // Boolean
let zipCode; // Undefined
let address = null; // Null
```

JavaScript merupakan bahasa yang _dinamis diketik_, artinya Anda tidak perlu mendeklarasikan jenis variabel secara eksplisit. Jenis variabel dapat berubah sepanjang script berjalan.

### Variabel

Gunakan `let` dan `const` untuk mendeklarasikan variabel:

```js
let message = "Halo"; // Bisa diubah nanti
const pi = 3.14; // Tidak dapat diubah
```

Hindari penggunaan `var` dalam karena merupakan cara lama yang digunakan untuk kompatibilitas perangkat lama.

### String

String merupakan tipe data yang merepresentasikan teks. Ini dapat dibuat dengan menggunakan tanda kutip tunggal atau ganda.

```js
let name = "John";
let name = "John";
let name = `John`;
```

Anda dapat menggabungkan string dengan menggunakan operator `+`:

```js
let firstName = "John";
let lastName = "Doe";

console.log(firstName + " " + lastName); // John Doe
```

String literal.

```js
let firstName = "John";
let lastName = "Doe";

console.log(`${firstName} ${lastName}`); // John Doe
```

### Object

Object merupakan struktur data yang merepresentasikan objek dunia nyata. Ini terdiri dari properti dan metode.

```js
let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

console.log(person.name); // Output: John
console.log(person.address.city); // Output: New York
person.sayHello(); // Output: Hello, my name is John
```

Cara melakukan akses pada objek adalah dengan menggunakan `.` (dot notation) atau `[]` (bracket notation).

```js
let person = {
  name: "John",
  age: 30,
};

console.log(person.name); // Output: John
console.log(person["name"]); // Output: John
```

### Operasi Aritmatika

JavaScript mendukung operasi aritmatika dasar:

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
console.log(a ** b); // 1000
```

### Operasi Perbandingan

JavaScript mendukung operasi perbandingan:

```js
let a = 10;
let b = 3;

console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); // true
```

### Operasi Logika

JavaScript mendukung operasi logika:

```js
let a = 10;
let b = 3;

console.log(a > 0 && b > 0); // true
console.log(a > 0 || b > 0); // true
console.log(!(a > 0)); // false
```

### Percabangan

Gunakan `if` dan `else` untuk percabangan:

```js
let a = 10;
let b = 3;

if (a > b) {
  console.log("a lebih besar dari b");
} else {
  console.log("a lebih kecil dari b");
}
```

Gunakan `switch` untuk percabangan dengan banyak kondisi:

```js
let day = 3;

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
```

### Perulangan

Gunakan `for` untuk perulangan:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Gunakan `while` untuk perulangan dengan kondisi:

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

Gunakan `.forEach` untuk perulangan elemen array:

```js
let fruits = ["apel", "pisang", "mangga"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
```

## Fungsi

Gunakan `function` untuk mendefinisikan fungsi:

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 3)); // 13
```

Gunakan `=>` untuk mendefinisikan fungsi anonim ([Arrow Functions](#arrow-functions)):

```js
let sum = (a, b) => a + b;

console.log(sum(10, 3)); // 13
```

## Array

Array merupakan struktur data yang merepresentasikan kumpulan nilai. Ini terdiri dari elemen yang dapat diakses menggunakan indeks.

```js
let fruits = ["apel", "pisang", "mangga"];

console.log(fruits[0]); // apel
console.log(fruits[1]); // pisang
console.log(fruits[2]); // mangga
```

## Modul (ES MODULE)

JavaScript mendukung modul untuk membagi kode menjadi beberapa file yang dapat diimpor dan diekspor.

```js
// file: utils.js
export function sum(a, b) {
  return a + b;
}
```

```js
// file: script.js
import { sum } from "./utils.js";

console.log(sum(10, 3)); // 13
```

## Arrow Functions

Arrow functions merupakan fitur ES6 yang memungkinkan Anda mendefinisikan fungsi dengan sintaks yang lebih ringkas.

```js
let sum = (a, b) => a + b;

console.log(sum(10, 3)); // 13
```

Jika fungsi hanya memiliki satu argumen, Anda dapat menghilangkan tanda kurung:

```js
let square = (x) => x * x;

console.log(square(10)); // 100
```

Jika fungsi tidak memiliki argumen, Anda harus menyertakan tanda kurung kosong:

```js
let sayHello = () => console.log("Halo Dunia");

sayHello(); // Halo Dunia
```

Jika fungsi memiliki lebih dari satu pernyataan, Anda harus menyertakan tanda kurung kurawal:

```js
let sum = (a, b) => {
  let result = a + b;
  return result;
};

console.log(sum(10, 3)); // 13
```

## Manipulasi DOM

DOM (Document Object Model) merepresentasikan elemen HTML sebagai objek yang dapat dimanipulasi dengan JavaScript.

Bacaan lanjutan: [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

Dapatkan elemen DOM berdasarkan ID-nya:

```js
let elem = document.getElementById("intro");
```

Ubah konten elemen:

```js
elem.textContent = "Halo Dunia";
```

Ubah gaya CSS:

```js
elem.style.color = "merah";
```

Tambahkan event listener:

```js
let button = document.getElementById("button");

button.addEventListener("click", () => {
  console.log("Tombol diklik");
});
```

Manipulasi elemen secara dinamis sebagai respons terhadap interaksi pengguna dan permintaan jaringan untuk membuat interaktivitas yang lebih kaya.

## Fetch API

Fetch API memungkinkan Anda mengirim permintaan HTTP untuk mengambil sumber daya dari server, membuka peluang pengambilan data untuk aplikasi web Anda.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

Menggunakan async/await:

```js
async function fetchTodo() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let json = await response.json();
  console.log(json);
}
```

Ini membuka kemungkinan mengambil data dari server tanpa menggunakan XMLHttpRequest atau wrapper seperti Axios untuk request HTTP.
