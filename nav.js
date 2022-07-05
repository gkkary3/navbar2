const toggleBtn = document.querySelector('.ham');
const nav = document.querySelector('.nav-nav');
const navin = document.querySelector('.nav-in');
toggleBtn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    navin.classList.toggle('active');

   

    
});

