const slidercontainer = document.querySelector('.slider');
const sliderimages = document.querySelectorAll('.slider img');

//buttons

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//image counter
let counter = 1;
const size = sliderimages[0].clientWidth;

slidercontainer.style.transform = "translateX(' + (-size * counter) + 'px)";



