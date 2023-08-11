// TUGAS 1 

//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

//let word = 'JavaScript';
//let second = 'is';
//let third = 'awesome';
//let fourth = 'and';
//let fifth = 'I';
//let sixth = 'love';
//let seventh = 'it!';

//code here
//const penggabunganKata = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh;

// ---------------------------------------
//console.log(penggabunganKata);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

 //let word = 'wow JavaScript is so cool';
 //let exampleFirstWord = word[0] + word[1] + word[2];

//console.log('First Word: ' + exampleFirstWord);

//const JavaScript =  word[3] + word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13]
//const is = word[15] + word[16]
//const so = word[18] + word[19]
//const cool = word[21] + word[22] + word[23] + word[24]

// ---------------------------------------
//console.log(JavaScript);
//console.log(is);
//console.log(so);
//console.log(cool);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

//let word3 = 'wow JavaScript is so cool';
//let exampleFirstWord3 = word3.substring(0, 3);

//console.log('First Word: ' + exampleFirstWord3);

//const JavaScript3 = word3.substring(4, 15);
//const is3 = word3.substring(15, 17);
//const so3 = word3.substring(18, 20);
//const cool3 = word3.substring(20, 25);

// ---------------------------------------
//console.log(JavaScript3);
//console.log(is3);
//console.log(so3);
//console.log(cool3);
// ---------------------------------------
// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let panjangKata1 = word4.substring(4, 15);
let panjangKata2 = word4.substring(15, 17);
let panjangKata3 = word4.substring(18, 20);
let panjangKata4 = word4.substring(20, 25);

let firstWordLength = exampleFirstWord4.length;
let panjangKata5 = panjangKata1.length
let panjangKata6 = panjangKata2.length
let panjangKata7 = panjangKata3.length
let panjangKata8 = panjangKata4.length

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('First Word: ' + panjangKata1 + ', with length: ' + panjangKata5);
console.log('First Word: ' + panjangKata2 + ', with length: ' + panjangKata6);
console.log('First Word: ' + panjangKata3 + ', with length: ' + panjangKata7);
console.log('First Word: ' + panjangKata4 + ', with length: ' + panjangKata8);