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
![image](https://private-user-images.githubusercontent.com/82949929/276808635-1638bc4d-dc8e-4143-9093-7a39613ba93f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTc3NzIxNTYsIm5iZiI6MTY5Nzc3MTg1NiwicGF0aCI6Ii84Mjk0OTkyOS8yNzY4MDg2MzUtMTYzOGJjNGQtZGM4ZS00MTQzLTkwOTMtN2EzOTYxM2JhOTNmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEwMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMDIwVDAzMTczNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY4MzEwM2U0Nzc3ZjgzZDQ2ZmE0NTA4ZDk4MGY4NjNiNWE3MTk0YzBjOGQ0YThhOTQwNzQyYjc5MDNkMDNjNmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.eJiErUIuxe_QTkpEFvbcGtDLDzBObVRsHTFDvAe0XIY)
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


