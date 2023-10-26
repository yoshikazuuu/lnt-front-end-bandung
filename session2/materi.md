# Materi CSS - Sesi 2

## Table of Contents

- [Introduction](#introduction)
- [Selectors and Properties](#selectors-and-properties)
- [Box Model](#box-model)
- [Styling Text](#styling-text)
- [Colors and Backgrounds](#colors-and-backgrounds)
- [Flexbox](#flexbox)
- [Grid](#grid)
- [Positioning](#positioning)
- [Animations and Transitions](#animations-and-transitions)
- [Responsive Design](#responsive-design)
- [Advanced Topics](#advanced-topics)
- [Best Practices](#best-practices)
- [Resources Lanjutan](#resources-lanjutan)

---

## Introduction

<p align="center">
  <img src="image.png">
</p>

CSS (Cascading Style Sheets) adalah bahasa stylesheet yang digunakan untuk mempresentasikan bagaimana sebuah halaman HTML. CSS mengarahkan bagaimana merender sebuah HTML pada layar, pada kertas, dan media lainnya.

---

## Selectors and Properties

Selectors adalah patterns yang digunakan untuk memilih element(s) yang akan kalian style.

Ada dua jenis selector:

1. Basic Selectors
2. Combinators

### Basic Selectors

#### 1. Type Selector

```html
<h1>Ini adalah Heading</h1>
<p>Ini adalah paragraph.</p>
```

```css
h1 {
  color: red;
}

p {
  font-size: 16px;
}
```

#### 2. Class Selector

```html
<button class="button">Click Me!</button>
<p class="alert">Ini sebuah peringatan!</p>
```

```css
.button {
  background-color: blue;
  color: white;
}

.alert {
  color: red;
}
```

#### 3. ID Selector

```html
<div id="navbar">Navigation Bar</div>
<div id="footer">Footer</div>
```

```css
#navbar {
  background-color: black;
  color: white;
}

#footer {
  text-align: center;
}
```

#### 4. Attribute Selector

```html
<input type="text" placeholder="Type here" />
<a href="https://yoshi.moe" target="_blank">Visit yoshi.moe</a>
```

```css
input[type="text"] {
  border: 2px solid blue;
}

a[target="_blank"] {
  color: green;
}
```

### Combinators

#### 1. Descendant Selector

```html
<article>
  <p>Ini adalah paragraf didalam article.</p>
  <div>
    <p>Ini adalah paragraf lain di dalam div, juga didalam article.</p>
  </div>
</article>
```

```css
article p {
  color: purple;
}
```

#### 2. Child Selector

```html
<section>
  <h1>Ini adalah heading didalam section.</h1>
  <p>Ini adalah paragraf didalam section.</p>
</section>

<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

```css
section > p {
  font-style: italic;
}

ul > li {
  font-weight: bold;
}
```

#### 3. Adjacent Sibling Selector

```html
<section>
  <h3>Judul Bagian</h3>
  <p>Ini adalah paragraf pertama dan langsung mengikuti h3.</p>
  <p>Ini adalah paragraf kedua.</p>
</section>
```

```css
h3 + p {
  font-weight: bold;
}
```

#### 4. General Sibling Selector

```html
<article>
  <h1>Judul Artikel</h1>
  <p>Ini adalah paragraf pertama dalam artikel.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <p>Ini adalah paragraf kedua dalam artikel.</p>
</article>
```

```css
h1 ~ p {
  color: blue;
}
```

### Pseudo-classes and Pseudo-elements

#### 1. Pseudo-class

```html
<a href="#">Link yang telah dikunjungi</a>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
a:visited {
  color: purple;
}

li:nth-child(even) {
  background-color: #f0f0f0;
}
```

#### 2. Pseudo-element

```html
<p>Ini adalah paragraf.</p>
<blockquote>Ini adalah sebuah blockquote.</blockquote>
```

```css
p::first-letter {
  font-size: 2em;
  color: blue;
}

blockquote::before,
blockquote::after {
  content: '"';
  font-size: 2em;
  color: gray;
}
```

Berikut contoh penggunaan selector dan property pada CSS untuk styling element HTML:

### Example

```css
button {
  color: white;
  background-color: blue;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}
```

---

## Box Model

Semua elemen HTML dapat dianggap sebagai box. Box model CSS memiliki komponen-komponen berikut:

- **Content:** Konten dari box, dimana text dan image berada. Content memiliki ukuran yang dapat diatur menggunakan property `width` dan `height`.
- **Padding:** Area kosong di sekitar content. Padding memiliki ukuran yang dapat diatur menggunakan property `padding`.
- **Border:** Garis yang mengelilingi content dan padding. Border memiliki ukuran yang dapat diatur menggunakan property `border`.
- **Margin:** Area kosong di sekitar border. Margin memiliki ukuran yang dapat diatur menggunakan property `margin`.

### Example

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 15px;
}
```

---

## Styling Text

CSS memiliki banyak property untuk styling text.

- **font-family:** Menentukan jenis font yang digunakan pada sebuah element.
- **font-size:** Menentukan ukuran font.
- **font-weight:** Menentukan ketebalan font.
- **text-align:** Menentukan posisi teks.
- **line-height:** Menentukan jarak antara baris teks.

### Example

```css
p {
  font-family: "Arial, sans-serif";
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
}
```

---

## Colors and Backgrounds

Kamu juga dapat menggunakan warna menggunakan named colors, HEX, RGB, RGBA, HSL, atau HSLA.

- **color:** Menentukan warna teks.
- **background-color:** Menentukan warna background.
- **background-image:** Menentukan gambar background.

### Example

```html
<div class="text-white">Teks berwarna putih</div>
<div class="background-blue">Latar belakang biru</div>
<div class="background-image">Latar belakang gambar</div>
<div class="combined">Gabungan warna dan latar belakang</div>
```

```css
.text-white {
  color: white;
}

.background-blue {
  background-color: #3498db;
}

.background-image {
  background-image: url("background.jpg");
}

.combined {
  color: white;
  background-color: rgba(52, 152, 219, 0.5);
  background-image: url("background.jpg");
}
```

---

## Flexbox

Flexbox adalah metode layout satu dimensi untuk menata item dalam baris atau kolom. Flexbox juga dapat digunakan untuk membuat layout responsif.

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex-grow: 1;
}
```

---

## Grid

Grid adalah metode layout dua dimensi untuk menata item dalam baris dan kolom. Grid juga dapat digunakan untuk membuat layout responsif.

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  border: 2px solid black;
  padding: 10px;
}

.item {
  grid-column: span 2;
  text-align: center;
  padding: 10px;
  border: 2px solid blue;
}
```

---

## Positioning

Properti posisi CSS memungkinkan kamu untuk mengontrol penempatan element.

- **static:** Nilai default. Elemen ditempatkan berdasarkan aliran normal dokumen.
- **relative:** Diposisikan relatif terhadap posisi normalnya.
- **absolute:** Diposisikan secara absolut terhadap elemen ancestor yang pertama kali diposisikan (bukan static).
- **fixed:** Diposisikan relatif terhadap jendela browser.
- **sticky:** Berdasarkan pada posisi scroll pengguna.

### Example

```html
<div class="static">Saya posisi static</div>
<div class="relative">Saya posisi relative</div>
<div class="absolute">Saya posisi absolute</div>
<div class="fixed">Saya posisi fixed</div>
<div class="sticky">Saya posisi sticky</div>
```

```css
.static {
  position: static;
  border: 2px solid red;
}

.relative {
  position: relative;
  top: 10px;
  left: 20px;
  border: 2px solid green;
}

.absolute {
  position: absolute;
  top: 30px;
  right: 40px;
  border: 2px solid blue;
}

.fixed {
  position: fixed;
  bottom: 50%;
  left: 30px;
  border: 2px solid yellow;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  border: 2px solid pink;
}
```

---

## Animations and Transitions

CSS dapat digunkan untuk membuat animasi dan transisi.

### Transitions

```css
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.1);
}

button:active {
  transform: scale(0.9);
}
```

### Animations

```css
@keyframes example {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

div {
  animation: example 1s infinite;
}
```

---

## Responsive Design

CSS memungkinkan desain webmu terlihat baik di semua perangkat melalui desain responsif.

- **Media Queries:** Menerapkan gaya tergantung pada perangkat.
- **Rem Units:** Gunakan unit rem untuk penskalaan ukuran.
- **Flexbox/Grid:** Gunakan flexbox atau grid yang fleksibel.

### Example

```css
div {
  width: 50%;
}

@media screen and (max-width: 600px) {
  div {
    width: 100%;
  }
}
```

---

## Advanced Topics

1. **Variabel CSS**: Memungkinkan untuk menyimpan nilai yang dapat digunakan kembali di seluruh stylesheet.

   ```css
   :root {
     --main-color: #3498db;
   }

   div {
     color: var(--main-color);
   }
   ```

2. **Fungsi CSS**: CSS menyediakan sejumlah fungsi seperti `calc()`, `var()`, `clamp()`, `min()`, dan `max()` untuk membantu dalam pengoperasian nilai.

   ```css
   div {
     width: calc(100% - 20px);
   }
   ```

3. **Selektor CSS Level 4**: Membawa sejumlah peningkatan dan penambahan pada kemampuan seleksi element, termasuk selektor berbasis induk dan selektor berdasarkan status.

   ```css
   div:has(> p) {
     border: 2px solid;
   }
   ```

4. **CSS Containment**: Teknik ini memperkenalkan cara untuk meningkatkan kinerja rendering dengan mengisolasi sebagian konten dari dokumen, memastikan bahwa perubahan di satu area tidak mempengaruhi area lain.

   ```css
   div {
     contain: content;
   }
   ```

5. **CSS Houdini**: Serangkaian API JavaScript yang memberikan pengembang lebih banyak kekuatan dan kontrol untuk mendesain UX yang kompleks dan lebih efisien.
   ```javascript
   CSS.paintWorklet.addModule("paint-worklet.js");
   ```

---

## Best Practices

1. **Jangan Mengulang Diri (Don’t Repeat Yourself)**: Hindari duplikasi kode untuk menjaga stylesheet kamu tetap bersih dan efisien.

2. **Organisasi Stylesheets**: Gunakan pendekatan seperti metodologi BEM, SMACSS, atau OOCSS untuk membantu dalam mengorganisir dan memelihara kode CSS.

   <details>
     <summary>Klik untuk lihat lebih jelas</summary>
     
     **a. BEM (Block, Element, Modifier)**

   BEM adalah konvensi penamaan yang sangat populer yang memudahkan pemahaman struktur dan tujuan dari elemen-elemen pada halaman.

   ```css
   /* Block component */
   .button {
     padding: 10px 15px;
     font-size: 14px;
   }

   /* Element that depends upon the block */
   .button__text {
     color: white;
   }

   /* Modifier that changes the style of the block */
   .button--large {
     font-size: 18px;
     padding: 15px 20px;
   }
   ```

   **b. SMACSS (Scalable and Modular Architecture for CSS)**

   SMACSS menekankan pada pemisahan kode menjadi beberapa bagian yang berbeda, sehingga lebih mudah untuk dipelihara dan dikembangkan.

   ```css
   /* Base */
   body,
   input,
   button,
   select,
   textarea {
     font-family: Arial, sans-serif;
   }

   /* Layout */
   .l-header {
     margin-bottom: 20px;
   }

   /* Module */
   .modal {
     max-width: 600px;
     margin: 0 auto;
   }

   /* State */
   .is-hidden {
     display: none;
   }

   /* Theme */
   .theme-light .modal {
     background-color: #fff;
   }
   ```

   **c. OOCSS (Object-Oriented CSS)**

   OOCSS lebih menekankan objek sehingga komponen lebih _reusable_ dan dapat digunakan kembali.

   ```css
   /* Struktur */
   .media {
     display: flex;
     align-items: flex-start;
   }

   .media__img {
     margin-right: 10px;
   }

   .media__body {
     flex: 1;
   }

   /* Kulit */
   .media--rounded .media__img {
     border-radius: 50%;
   }
   ```

   </details>

3. **Komentari Kode Kamu**: Tinggalkan komentar untuk menjelaskan bagian yang kompleks atau kurang jelas untuk mempermudah pemahaman, atau sebagai _future reference_.

---

## Resources Lanjutan

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)
