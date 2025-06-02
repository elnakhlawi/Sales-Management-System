let iDarkMode=document.getElementById('iDarkMode');
let btnSubmit=document.getElementById('submit');
let searchByTitle=document.getElementById('searchByTitle');
let searchByCategory=document.getElementById('searchByCategory');
console.log(searchByTitle);
iDarkMode.addEventListener('click',() => { 
  document.body.classList.toggle('body-dark-mode');
  iDarkMode.classList.toggle('i-dark-mode-active');
  btnSubmit.classList.toggle('btn-darke-mode');
  searchByTitle.classList.toggle('btn-darke-mode');
  searchByCategory.classList.toggle('btn-darke-mode');

 })
