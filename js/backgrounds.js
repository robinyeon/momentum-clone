const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

//JS => HTML 하는 방법 createElement: create HTML by JS
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

//appendChild: add the html to the end of the body
//prepend: add the html to the top of the body
document.body.appendChild(bgImage);