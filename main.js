let header = document.getElementById("home");
window.onscroll = () => {
  if (window.scrollY > 30) {
    header.classList.add("bg-white");
    header.classList.remove("border-b-2");
  } else {
    header.classList.remove("bg-white");
    header.classList.add("border-b-2");
  }
};

let menu = document.getElementById('menu')
let list = document.getElementById('list')

menu.addEventListener('click',()=>{
  list.classList.toggle('esm:flex')
  menu.classList.toggle('fa-xmark')
  menu.classList.toggle('fa-bars')
  
})


