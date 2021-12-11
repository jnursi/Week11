const myButton = document.querySelector('button');
let image = document.querySelector ('img');
const images = ["/images/pic1.jpeg", "/images/pic2.jpeg", "/images/pic3.jpeg", "/images/pic4.jpeg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById('myImage').src= images[randomIndex];
}