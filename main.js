let iDarkMode=document.getElementById('iDarkMode');
let btnSubmit=document.getElementById('submit');

iDarkMode.addEventListener('click',() => { 
  document.body.classList.toggle('body-dark-mode');
  iDarkMode.classList.toggle('i-dark-mode-active');
  btnSubmit.classList.toggle('btn-darke-mode');

 })
