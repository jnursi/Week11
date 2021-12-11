const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesTOChooseFrom = document.querySelectorAll(".gallery img");

imagesTOChooseFrom.forEach(img => img.addEventListener('click', imageClick));


function imageClick(e) {

    imagesTOChooseFrom.forEach(img=> img.style.opacity = 1)
    
    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}