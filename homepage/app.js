const nav=document.querySelector(".rightside-navbar ul")
const hamburgerMenu=document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click",()=>{

    nav.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
   
});


document.querySelectorAll('.rightside-navbar li').forEach(n=>n.addEventListener('click',()=>{
  hamburgerMenu.classList.remove('active');
  nav.classList.remove('active');
}))

const slides = document.querySelectorAll(".slide");
const nextSlideButton = document.querySelector(".btn-next");
const prevSlideButton = document.querySelector(".btn-prev");

let currentSlideIndex = 0;
const totalSlides = slides.length - 1;


// Function to set the translateX property for each slide
const moveSlides = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlideIndex)}%)`;

  });
  // for(let i=0;i<slides.length;i++){
  //   let slide=slides[i];
  //   slide.style.transform=`translateX(${100 * (i-currentSlideIndex)}%)`;
  // }

};
moveSlides();

// Event listener for the next slide button
nextSlideButton.addEventListener("click", function () {
  // Check if the current slide is the last one and reset to the first slide
  currentSlideIndex = (currentSlideIndex === totalSlides) ? 0 : currentSlideIndex + 1;

  // Move slides by -100%
  moveSlides();
});

// Event listener for the previous slide button
prevSlideButton.addEventListener("click", function () {
  // Check if the current slide is the first one and reset to the last slide
  currentSlideIndex = (currentSlideIndex === 0) ? totalSlides : currentSlideIndex - 1;

  // Move slides by 100%
  moveSlides();
});
