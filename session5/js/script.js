function scrollFunction() {
  const GAP = 115;
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const img = document.querySelector("img");
  const title = document.getElementById("title");

  if (document.documentElement.scrollTop > GAP) {
    header.style.padding = "1.5rem";
    header.style.paddingLeft = "20%";
    header.style.paddingRight = "20%";
    nav.style.borderRadius = "1rem";
    nav.style.border = "1px solid rgb(31, 41, 55)";
  } else {
    header.style.padding = "0";
    nav.style.borderRadius = "0";
    nav.style.border = "1px solid rgb(31, 41, 55)";
    nav.style.borderTopWidth = "0";
    nav.style.borderLeftWidth = "0";
    nav.style.borderRightWidth = "0";
  }

  const about = document.querySelector("#home");
  const percentage =
    1 - document.documentElement.scrollTop / about.clientHeight;

  img.style.padding = `${percentage * 5}rem`;
  img.style.opacity = `${percentage}`;

  title.style.opacity = `${percentage}`;
}

function RandomQuote() {
  const quoteElement = document.getElementById("quote");
  const quotes = [
    `"You know, we went through a lot together this past year, but we also get to welcome in another year because of all that."`,
    `"Valentine's Day, huh? Maybe I should draw something and upload it online."`,
    `"Oh man, why can't the school be closed on rainy days?"`,
    `"A cherry blossom flavor drink? I've got to try it!"`,
    `"All I want is just to keep improving."`,
  ];

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    let index = 0;
    quoteElement.textContent = ``;
    quoteElement.style.height = "4rem";

    const typewriter = setInterval(() => {
      quoteElement.textContent += quote[index];
      index++;

      if (index >= quote.length) {
        clearInterval(typewriter);
      }
    }, 10);
  }, 5000);
}

function addImage(url) {
  var grid = document.getElementById("image-grid");
  var newImage = document.createElement("img");
  newImage.className = "grid-item";
  newImage.src = url;
  grid.appendChild(newImage);
}

document.addEventListener("DOMContentLoaded", function () {
  var imageUrls = [
    "/images/ena-1.png",
    "/images/ena-2.png",
    "/images/ena-3.png",
    "/images/ena-4.png",
    "/images/ena-5.png",
    "/images/ena-6.png",
  ];

  imageUrls.forEach(function (url) {
    addImage(url);
  });

  var form = document.getElementById("add-image");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var input = document.getElementById("img-source");
    var imageUrl = input.value.trim();

    if (imageUrl !== "") {
      addImage(imageUrl);
      input.value = "";
    }
  });
});

RandomQuote();
window.onscroll = function () {
  scrollFunction();
};

function changeImage() {
  var imageUrls = [
    "/images/ena-1.png",
    "/images/ena-2.png",
    "/images/ena-3.png",
    "/images/ena-4.png",
    "/images/ena-5.png",
    "/images/ena-6.png",
  ];

  const homeImage = document.getElementById("home-image");

  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imageUrl = imageUrls[randomIndex];

    homeImage.src = imageUrl;
  }, 3000);
}
