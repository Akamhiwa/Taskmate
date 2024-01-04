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
