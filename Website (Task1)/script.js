const smallImages = document.querySelectorAll('.small-imgs img');
const mainImage = document.querySelector('.main-img');

smallImages.forEach((img) => {
    img.addEventListener('click', () => {
        mainImage.src = img.src;
    });
});

const navToggler = document.querySelector(".nav-toggler") 
const toggler = document.querySelector(".nav-content img");
const logo = document.querySelector(".logo");

toggler.addEventListener('click', () =>{
    if(navToggler.style.display == 'none'){
        navToggler.style.display = 'block';
        logo.style.opacity = '0';
    }
    else{
        navToggler.style.display = 'none';
        logo.style.opacity = '100%';
    }
})