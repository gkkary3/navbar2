const toggleBtn = document.querySelector('.ham');
const nav = document.querySelector('.nav-nav');
const navin = document.querySelector('.nav-in');
// const navin = document.querySelector('nav-in');
// const signUpBtn = document.querySelector('.signUp-btn');

toggleBtn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    navin.classList.toggle('active');
    // signUpBtn.classList.toggle('active');

    
});

// toggleBtn2.addEventListener('click',()=>{
    
    
//     seconds.classList.toggle('active');
//     third.classList.toggle('exit');
    
   
    
// });