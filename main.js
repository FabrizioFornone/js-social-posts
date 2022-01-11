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

// array di oggetti "socialFeed"

const socialFeed = [
  {
    postNumber: 1,
    author: "Eddie Guerrero",
    authorPhoto: "https://unsplash.it/300/300?image=1",
    date: "12-20-2021",
    text: "The return of Eddie la raza",
    image: "https://unsplash.it/600/300?image=10",
    likesCounter: 2000,
  },
  {
    postNumber: 2,
    author: "Ray Misterio",
    authorPhoto: "https://unsplash.it/300/300?image=20",
    date: "06-10-2021",
    text: "Today it was the day",
    image: "https://unsplash.it/600/300?image=11",
    likesCounter: 100,
  },
  {
    postNumber: 3,
    author: "Kurt Angle",
    authorPhoto: "https://unsplash.it/300/300?image=30",
    date: "02-01-2020",
    text: "The return of Eddie la raza",
    image: "https://unsplash.it/600/300?image=12",
    likesCounter: 190,
  },
  {
    postNumber: 4,
    author: "Randy Orton",
    authorPhoto: "https://unsplash.it/300/300?image=40",
    date: "12-20-2021",
    text: "I'm the legend killer",
    image: "https://unsplash.it/600/300?image=13",
    likesCounter: 260,
  },
  {
    postNumber: 5,
    author: "Big Show",
    authorPhoto: "https://unsplash.it/300/300?image=50",
    date: "08-25-2020",
    text: "Well its the Big Show!",
    image: "https://unsplash.it/600/300?image=14",
    likesCounter: 870,
  },
];

/* Milestone 2
Prendendo come riferimento il layout
di esempio presente nell’html, stampiamo i post del nostro feed. */

const hookHtml = document.querySelector(".hook");

// ciclo for per la stama dei post

for (let i = 0; i < socialFeed.length; i++) {
  const postElement = socialFeed[i];

  hookHtml.innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${postElement.authorPhoto}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${postElement.author}</div>
                <div class="post-meta__time">${postElement.date}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${postElement.text}</div>
    <div class="post__image">
        <img src="${postElement.image}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${postElement.likesCounter}</b> persone
            </div>
        </div> 
    </div>            
</div>`;
}
