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



const generateBtn = document.querySelector(".generate-btn");
const checkboxBtn = document.querySelectorAll(".checkbox-btn");
const length_el = document.querySelector("#length");
const copy=document.querySelector(".copy-icon")
const showPassword = document.querySelector(".password"); // Fix the typo here
const characters = {
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Lowercase: "abcdefghijklmnopqrstuvwxyz",
    Numbers: "0123456789",
    Symbols: "!@#$%^&*()",
};

generateBtn.addEventListener("click", () => {
    let length = length_el.value;
    let char = "";
     let randomPassword = "";
    checkboxBtn.forEach(btn => {
        if (btn.checked) {
            char += characters[btn.id];
        }
    });

    for (let i = 0; i < length; i++) {
        randomPassword += char[Math.floor(Math.random() * char.length)];
    }

    showPassword.value = randomPassword;

});
copy.addEventListener("click", async ()=>{
    try {
        
        await navigator.clipboard.writeText(showPassword.value);
        console.log('Text copied to clipboard');
        // You can add additional feedback to the user, like displaying a tooltip or changing the icon color
      } catch (err) {
        console.error('Unable to copy text to clipboard', err);
        // Handle the error, such as displaying an error message to the user
      }
  })
