// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/*
const followersArray = ['luishrd', 'BigKnell', 'cheshire137', 'pifafu', 'tetondan'];
const array = response.data.topics

Array.map(e =>{

  let first = response.data.topics 
  let newAdd = first.concat(`${[e]}`)

  console.log(newAdd)
  .then(response => {
    // deal with the response data in here
    console.log(response);
    let e = response.data;
    let cardDiv1 = document.querySelector(".cards").appendChild(
        profileCreator(
        */



axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles["javascript"]);
    response.data.articles["javascript"].map(e => {
      console.log(e);
      let cc = document
        .querySelector(".cards-container")
        .appendChild(createCards(e.authorName, e.authorPhoto, e.headline));
    });
  });

function createCards(authorName, authorPhoto, headline) {
  //elements
  let cardClass = document.createElement("div");
  let headlineClass = document.createElement("div");
  let authorClass = document.createElement("div");
  let imgClass = document.createElement("div");
  let imgSrc = document.createElement("img");
  let by = document.createElement("span");

  //classes
  cardClass.classList.add("card");
  headlineClass.classList.add("headline");
  authorClass.classList.add("author");
  imgClass.classList.add("img-container");

  // append
  cardClass.appendChild(headlineClass);
  cardClass.appendChild(authorClass);
  authorClass.appendChild(imgClass);
  authorClass.appendChild(by);
  imgClass.appendChild(imgSrc);

  //text content
  headlineClass.textContent = headline;
  imgSrc.src = authorPhoto;
  authorClass.textContent = authorName;

  return cardClass;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles["javascript"]);
    response.data.articles["bootstrap"].map(e => {
      console.log(e);
      let cc = document
        .querySelector(".cards-container")
        .appendChild(createCards(e.authorName, e.authorPhoto, e.headline));
    });
  });

function createCards(authorName, authorPhoto, headline) {
  //elements
  let cardClass = document.createElement("div");
  let headlineClass = document.createElement("div");
  let authorClass = document.createElement("div");
  let imgClass = document.createElement("div");
  let imgSrc = document.createElement("img");
  let by = document.createElement("span");

  //classes
  cardClass.classList.add("card");
  headlineClass.classList.add("headline");
  authorClass.classList.add("author");
  imgClass.classList.add("img-container");

  // append
  cardClass.appendChild(headlineClass);
  cardClass.appendChild(authorClass);
  authorClass.appendChild(imgClass);
  authorClass.appendChild(by);
  imgClass.appendChild(imgSrc);

  //text content
  headlineClass.textContent = headline;
  imgSrc.src = authorPhoto;
  authorClass.textContent = authorName;

  return cardClass;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles["javascript"]);
    response.data.articles["javascript"].map(e => {
      console.log(e);
      let cc = document
        .querySelector(".cards-container")
        .appendChild(createCards(e.authorName, e.authorPhoto, e.headline));
    });
  });

function createCards(authorName, authorPhoto, headline) {
  //elements
  let cardClass = document.createElement("div");
  let headlineClass = document.createElement("div");
  let authorClass = document.createElement("div");
  let imgClass = document.createElement("div");
  let imgSrc = document.createElement("img");
  let by = document.createElement("span");

  //classes
  cardClass.classList.add("card");
  headlineClass.classList.add("headline");
  authorClass.classList.add("author");
  imgClass.classList.add("img-container");

  // append
  cardClass.appendChild(headlineClass);
  cardClass.appendChild(authorClass);
  authorClass.appendChild(imgClass);
  authorClass.appendChild(by);
  imgClass.appendChild(imgSrc);

  //text content
  headlineClass.textContent = headline;
  imgSrc.src = authorPhoto;
  authorClass.textContent = authorName;

  return cardClass;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles["javascript"]);
    response.data.articles["technology"].map(e => {
      console.log(e);
      let cc = document
        .querySelector(".cards-container")
        .appendChild(createCards(e.authorName, e.authorPhoto, e.headline));
    });
  });

function createCards(authorName, authorPhoto, headline) {
  //elements
  let cardClass = document.createElement("div");
  let headlineClass = document.createElement("div");
  let authorClass = document.createElement("div");
  let imgClass = document.createElement("div");
  let imgSrc = document.createElement("img");
  let by = document.createElement("span");

  //classes
  cardClass.classList.add("card");
  headlineClass.classList.add("headline");
  authorClass.classList.add("author");
  imgClass.classList.add("img-container");

  // append
  cardClass.appendChild(headlineClass);
  cardClass.appendChild(authorClass);
  authorClass.appendChild(imgClass);
  authorClass.appendChild(by);
  imgClass.appendChild(imgSrc);

  //text content
  headlineClass.textContent = headline;
  imgSrc.src = authorPhoto;
  authorClass.textContent = authorName;

  return cardClass;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles["javascript"]);
    response.data.articles["jquery"].map(e => {
      console.log(e);
      let cc = document
        .querySelector(".cards-container")
        .appendChild(createCards(e.authorName, e.authorPhoto, e.headline));
    });
  });

function createCards(authorName, authorPhoto, headline) {
  //elements
  let cardClass = document.createElement("div");
  let headlineClass = document.createElement("div");
  let authorClass = document.createElement("div");
  let imgClass = document.createElement("div");
  let imgSrc = document.createElement("img");
  let by = document.createElement("span");

  //classes
  cardClass.classList.add("card");
  headlineClass.classList.add("headline");
  authorClass.classList.add("author");
  imgClass.classList.add("img-container");

  // append
  cardClass.appendChild(headlineClass);
  cardClass.appendChild(authorClass);
  authorClass.appendChild(imgClass);
  authorClass.appendChild(by);
  imgClass.appendChild(imgSrc);

  //text content
  headlineClass.textContent = headline;
  imgSrc.src = authorPhoto;
  authorClass.textContent = authorName;

  return cardClass;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles["javascript"]);
    response.data.articles["node.js"].map(e => {
      console.log(e);
      let cc = document
        .querySelector(".cards-container")
        .appendChild(createCards(e.authorName, e.authorPhoto, e.headline));
    });
  });

function createCards(authorName, authorPhoto, headline) {
  //elements
  let cardClass = document.createElement("div");
  let headlineClass = document.createElement("div");
  let authorClass = document.createElement("div");
  let imgClass = document.createElement("div");
  let imgSrc = document.createElement("img");
  let by = document.createElement("span");

  //classes
  cardClass.classList.add("card");
  headlineClass.classList.add("headline");
  authorClass.classList.add("author");
  imgClass.classList.add("img-container");

  // append
  cardClass.appendChild(headlineClass);
  cardClass.appendChild(authorClass);
  authorClass.appendChild(imgClass);
  authorClass.appendChild(by);
  imgClass.appendChild(imgSrc);

  //text content
  headlineClass.textContent = headline;
  imgSrc.src = authorPhoto;
  authorClass.textContent = authorName;

  return cardClass;
}