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


const tasks=document.querySelector('.input-box');
const addTask=document.querySelector('button');
const lists=document.querySelector('.user-list-container')
addTask.addEventListener('click',()=>{
    
    functionality()
});

tasks.addEventListener("keydown",(e)=>{
    if (e.key==="Enter"){
        functionality()
    }
})
let functionality=()=>{

    const inputValue=tasks.value.trim();
    if(inputValue!==''){
        let userTasks=document.createElement('li');
        let deleteTasks=document.createElement('img')
        deleteTasks.setAttribute('src','./imgs/circle-xmark.png');
        deleteTasks.classList.add('delete-btn')
        userTasks.textContent=inputValue;
        lists.appendChild(userTasks);
        userTasks.appendChild(deleteTasks)

        tasks.value='';
        saveData()
    }
    
    
}
lists.addEventListener('click',(e)=>{

      if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        saveData()
      }
      else if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
        saveData()
      }


})
let saveData=()=>{
    localStorage.setItem("lists",lists.innerHTML)
}
let showTasks=()=>{
    lists.innerHTML=localStorage.getItem('lists')
}
showTasks()
