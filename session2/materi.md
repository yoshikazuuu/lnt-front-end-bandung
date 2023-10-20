# Apa itu HTML?

Hyper Text Markup Languange atau HTML adalah markup languange yang digunakan untuk membuat webpage.

## HTML5

![html5 logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1920px-HTML5_logo_and_wordmark.svg.png)
HTML5 merupakan versi HTML paling muktahir yang menjadi standar dalam pembuatan webpage di internet.

## Contoh halaman HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>

  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

- `<!DOCTYPE html>` deklarasi bahwa dokumen merupakan HTML5 (bersifat wajib).
- `<html>` root element sebuah halaman HTML.
- `<head>` element pada HTML untuk menampung informasi terkait halaman HTML seperti judul, charset, meta, dan style.
- `<title>` element HTML untuk menampilkan judul halaman.
- `<body>` element yang menampung semua hal yang akan ditampilkan pada halaman webpage.
- `<h1>` element yang mendefinisikan heading.
- `<p>` element yang mendefinisikan paragraf.

## Struktur HTML

![Alt text](image.png)

Dari struktur diatas akan menampilkan halaman seperti berikut.
![hasil html](https://cdn.discordapp.com/attachments/1029089071903019029/1164765949543583834/Screenshot_20231020_102147_Chrome.jpg?ex=654467d2&is=6531f2d2&hm=30f0ff1c63989d3cc2438487c733b4dcce670c71fe1b4bb60ae1b6f4d788134c&)

## HTML Element

Kita sudah melihat pada contoh diatas bahwa HTML berisi element-element yang disusun yang nantinya membentuk webpage yang kita inginkan.

Elemen pada HTML dapat kita destruktur menjadi seperti ini.

```html
<sometag attributes1="hi" attributes2="mom"> ... content ... </sometag>
```

- `<` dan `>` adalah karakter pembuka dan penutup suatu tag.
- `sometag` adalah tag yang digunakan pada element tersebut.
- `attributes1` dan `attributes2` adalah atribut pelengkap pada sebuah tag.
- `hi` dan `mom` merupakan value dari atribut.
- `/` merupakan karakter pada closing tag, opening tag tidak membutuhkan karakter tersebut.
- `... content ...` merupakan isi konten pada element tersebut.

Untuk contoh implementasi-nya kalian bisa lihat contoh dibawah.

```html
<a href="https://yoshi.moe"> my website </a>
```

- a merupakan tag yang digunakan untuk membuat link.
- href merupakan atribut yang digunakan untuk menentukan link yang akan dituju.
- my website merupakan isi konten dari tag tersebut.

## Struktur Teks

- `<h1>` - `<h6>` Heading
- `<p>` Paragraf
- `<br>` Baris baru
- `<hr>` Garis horizontal

```html
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>
```

## Struktur Link

- `<a>` Link
- `<img>` Gambar

```html
<a href="https://yoshi.moe"> my website </a>
<img src="https://yoshi.moe/img/pic_001.jpg" alt="mizuki" />
```

## Struktur List

- `<ul>` Unordered list
- `<ol>` Ordered list
- `<li>` List item

```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

<ol>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>
```

## Struktur Table

- `<table>` Table
- `<tr>` Table row
- `<th>` Table header
- `<td>` Table data

```html
<table>
  <tr>
    <th>header 1</th>
    <th>header 2</th>
    <th>header 3</th>
  </tr>
  <tr>
    <td>data 1</td>
    <td>data 2</td>
    <td>data 3</td>
  </tr>
  <tr>
    <td>data 1</td>
    <td>data 2</td>
    <td>data 3</td>
  </tr>
</table>
```

## Struktur Form

- `<form>` Form
- `<input>` Input
- `<textarea>` Textarea
- `<button>` Button
- `<select>` Select
- `<option>` Option

```html
<form>
  <input type="text" name="username" />
  <input type="password" name="password" />
  <textarea name="message"></textarea>
  <button type="submit">Submit</button>
  <select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</form>
```

## Struktur Meta

- `<head>` Head
- `<title>` Title
- `<meta>` Meta
- `<style>` Style
- `<link>` Link

```html
<head>
  <title>Page Title</title>
  <meta charset="UTF-8" />
  <meta name="description" content="Free Web tutorials" />
  <meta name="keywords" content="HTML, CSS, JavaScript" />
  <meta name="author" content="John Doe" />
  <style>
    body {
      background-color: linen;
    }
    h1 {
      color: maroon;
      margin-left: 40px;
    }
  </style>
  <link rel="stylesheet" href="styles.css" />
</head>
```

```html
<head>
  <meta property="og:title" content="The Rock" />
  <meta property="og:type" content="video.movie" />
  <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
  <meta
    property="og:image"
    content="https://ia.media-imdb.com/images/rock.jpg"
  />
</head>
```
