/* Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito,
il nostro script JS in cui:
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post,
numero progressivo da 1 a n,
 nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.
 Unsplash (https://unsplash.it/300/300?image=<id> */

const socialfeed = [
  {
    postNumber: 1,
    author: "Eddie Guerrero",
    date: "12-20-2021",
    text: "The return of Eddie la raza",
    image: "img-1.jpg",
    likesCounter: 2000,
  },
  {
    postNumber: 2,
    author: "Ray Misterio",
    date: "06-10-2021",
    text: "Today it was the day",
    image: "img-2.jpg",
    likesCounter: 100,
  },
  {
    postNumber: 3,
    author: "Kurt Angle",
    date: "02-01-2020",
    text: "The return of Eddie la raza",
    image: "img-3.jpg",
    likesCounter: 190,
  },
  {
    postNumber: 4,
    author: "Randy Orton",
    date: "12-20-2021",
    text: "I'm the legend killer",
    image: "img-4.jpg",
    likesCounter: 260,
  },
  {
    postNumber: 5,
    author: "Big Show",
    date: "08-25-2020",
    text: "Well its the Big Show!",
    image: "img-5.jpg",
    likesCounter: 870,
  },
];
