// start dark mode
let iDarkMode = document.getElementById("iDarkMode");
let btnSubmit = document.getElementById("submit");
let searchByTitle = document.getElementById("searchByTitle");
let searchByCategory = document.getElementById("searchByCategory");
let inpustElement = document.getElementsByTagName("input");
let mood = "create";
let temp;
iDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("body-dark-mode");
  iDarkMode.classList.toggle("i-dark-mode-active");
  btnSubmit.classList.toggle("btn-darke-mode");
  searchByTitle.classList.toggle("btn-darke-mode");
  searchByCategory.classList.toggle("btn-darke-mode");
  for (let i = 0; i < inpustElement.length; i++) {
    inpustElement[i].classList.add("iputs-color-darke-mode");
  }
});
//end dark mode

//start get all   buttons and inputs from inputs section
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let popup = document.getElementById("popup");
let tBody = document.getElementById("tbody");
console.log(table);
//end get all   buttons and inputs from inputs section

// start get total
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "green";
  } else {
    total.innerHTML = "";
    total.style.backgroundColor = "rgb(223, 91, 91)";
  }
}
//end get total

// start create product & save localstorage
let dataproducts;

if (localStorage.products != null) {
  dataproducts = JSON.parse(localStorage.products);
} else {
  dataproducts = [];
}
submit.onclick = function () {
  let newproduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  if (mood === "create") {
    if (newproduct.count > 1) {
      for (let i = 0; i < newproduct.count; i++) {
        dataproducts.push(newproduct);
      }
    } else {
      dataproducts.push(newproduct);
    }
  } else {
    dataproducts[temp] = newproduct;
    mood = "create";
    submit.innerHTML = "create";
    count.style.display = "block";
  }
  window.localStorage.products = JSON.stringify(dataproducts);
  clearData();
  showData();
};

// end create product & save localstorage

// start clear inputs

function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
  showPopup();
}

// end clear inputs

//start popup
function showPopup() {
  popup.classList.add("open");
  setTimeout(() => {
    popup.classList.remove("open");
  }, 1500);
}
//end popup

// start read data
function showData() {
  getTotal()
  let tableData = "";
  for (let i = 0; i < dataproducts.length; i++) {
    tableData += `
        <tr> 
          <td>${i}</td>
          <td>${dataproducts[i].title}</td>
          <td>${dataproducts[i].price}</td>
          <td>${dataproducts[i].taxes}</td>
          <td>${dataproducts[i].ads}</td> 
          <td>${dataproducts[i].discount}</td>
          <td>${dataproducts[i].total}</td>
          <td>${dataproducts[i].category}</td>
          <td onclick='updateData(${i})'><button>update</button></td>
          <td><button onclick='deleteItem(${i})'>delete</button></td>
          </tr>
  
  `;
    let deleteAll = document.getElementById("deleteAll");
    if (dataproducts.length > 0) {
      deleteAll.innerHTML = `<button onclick='deleteAllItems()'>delete All (${dataproducts.length})</button>`;
      deleteAll.style.cssText = "margin-top:20px;";
    } else {
      deleteAll.innerHTML = "";
    }
  }

  tBody.innerHTML = tableData;
}
showData();
// end read data

// start delete
function deleteItem(i) {
  dataproducts.splice(i, 1);
  localStorage.products = JSON.stringify(dataproducts);
  showData();
}
function deleteAllItems() {
  localStorage.clear();
  dataproducts.splice(0);
  showData();
}

// start update
function updateData(i) {
  title.value = dataproducts[i].title;
  price.value = dataproducts[i].price;
  taxes.value = dataproducts[i].taxes;
  ads.value = dataproducts[i].ads;
  discount.value = dataproducts[i].discount;
  getTotal();
  count.style.display = "none";
  category.value = dataproducts[i].category;
  submit.innerHTML = "Update";
  mood = "update";
  temp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}
// end update

// end delete
//count
//search
//clean data
