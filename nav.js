const toggleBtn = document.querySelector('.ham');
const nav = document.querySelector('.nav-nav');
const loginBtn = document.querySelector('.login-btn');
const signUpBtn = document.querySelector('.signUp-btn');

toggleBtn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    loginBtn.classList.toggle('active');
    signUpBtn.classList.toggle('active');

    
});

// toggleBtn2.addEventListener('click',()=>{
    
    
//     seconds.classList.toggle('active');
//     third.classList.toggle('exit');
    
   
    
// });