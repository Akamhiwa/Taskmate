//navbar
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


const clickedBtn = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const userInput = document.querySelector('input')
const negative = document.querySelector('.negative')
const percent = document.querySelector('.percent')

clickedBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let targetButton = e.target.innerHTML;

    if (targetButton === 'x') {
      targetButton = '*';
    }

    userInput.value += targetButton;
  });
});

const calculate = () => {
  userInput.value = eval(userInput.value);
}
negative.addEventListener('click', () => {
  userInput.value = -eval(userInput.value)
})
percent.addEventListener('click', () => {
  userInput.value = (eval(userInput.value)) / 100
})

clearButton.addEventListener('click', () => {
  userInput.value ='';
});

equalButton.addEventListener('click', () => {
  calculate();
});

document.addEventListener('keydown', (e) => {


  
  if (e.key === "Enter") 
    calculate();
});