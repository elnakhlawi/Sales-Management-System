
// start dark mode 
let iDarkMode=document.getElementById('iDarkMode');
let btnSubmit=document.getElementById('submit');
let searchByTitle=document.getElementById('searchByTitle');
let searchByCategory=document.getElementById('searchByCategory');

iDarkMode.addEventListener('click',() => { 
  document.body.classList.toggle('body-dark-mode');
  iDarkMode.classList.toggle('i-dark-mode-active');
  btnSubmit.classList.toggle('btn-darke-mode');
  searchByTitle.classList.toggle('btn-darke-mode');
  searchByCategory.classList.toggle('btn-darke-mode');

 })
 //end dark mode

 //start get all   buttons and inputs from inputs section
 let title=document.getElementById('title');
 let price=document.getElementById('price');
 let taxes=document.getElementById('taxes');
 let ads=document.getElementById('ads');
 let discount=document.getElementById('discount');
 let total=document.getElementById('total');
 let count=document.getElementById('count');
 let category=document.getElementById('category');
 let submit=document.getElementById('submit');
 //end get all   buttons and inputs from inputs section

 // start get total
function getTotal(){
  if(price.value !=''){
  let result=(+price.value + +taxes.value + +ads.value) - +discount.value;
  total.innerHTML=result;
  total.style.backgroundColor='green';
  }else{
    total.innerHTML='';
    total.style.backgroundColor='rgb(223, 91, 91)';
  }
}




//end get total





























 //create product
 //save localstorage
 //clear inputs
 //read  
 //count
 //delete 
 //update
 //search 
 //clean data