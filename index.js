var categories = ["Select a Category", "Electronics", "Footwear", "Fashion"];
var electronics = ["Select Electronics","JBL Speaker","Earpods"];
var footwear = ["Select Footwear","Nike Casuals","Lee Cooper Boot"];
var fashion = ["Select Fashion","Shirt", "Jeans"];
var products = [];
var cartItems = [];


var data = [
  {Name:"JBL Speaker", Price:4600.55, Photo:"jblspeaker.jpg"},
 {Name:"Earpods", Price:2600.55, Photo:"jblearpods.jpg"},
 {Name:"Nike Casuals", Price:7600.55, Photo:"nikeshoes.jpg"},
 {Name:"Lee Cooper Boot", Price:3600.55, Photo:"Leecooper.jpeg"},
 {Name:"Shirt", Price:2600.55, Photo:"Shirt.jpeg"},
 {Name:"Jeans", Price:5600.55, Photo:"jeans.jpeg"},
];


 function LoadProducts(){
   var lstProducts = document.getElementById("lstProducts");
   lstProducts.innerHTML = " ";
   for(var item of products){
     var option = document.createElement("option");
     option.text = item;
     option.value = item;
     lstProducts.appendChild(option);
   }
 }
 
 
 

function LoadCategories(){
  var lstCategories = document.getElementById("lstCategories");
  for(var item of categories){
    
   var option = document.createElement("option");
  option.text = item;
 option.value = item;
  lstCategories.appendChild(option);
   }
}

function bodyload(){
  
  LoadCategories();
  GetCount();
}

function CategoryChanged(){
  var selectedcategory = document.getElementById("lstCategories").value;
  switch(selectedcategory)
  {
    case "Electronics":
    products = electronics;
    LoadProducts();
    break;
    case "Footwear":
    products = footwear;
    LoadProducts();
    break;
    case "Fashion":
    products = fashion;
    LoadProducts();
    break;
    default:
    products = ["Select a Category"];
    LoadProducts();
    break;
  }
}
var searchedProduct;
function ProductChanged(){
  var selectedProduct = document.getElementById("lstProducts").value;
searchedProduct = data.find(function(product){
    
    return product.Name == selectedProduct;
    
 });
 document.getElementById("lblName").innerHTML = searchedProduct.Name;
 document.getElementById("lblPrice").innerHTML = "&#8377;" + searchedProduct.Price;
 document.getElementById("imgProduct").src = searchedProduct.Photo;
  
}

function GetCount(){
  document.getElementById("lblCount").innerHTML = cartItems.length;
}

function AddToCartClick(){
  cartItems.push(searchedProduct);
  GetCount();
  alert("Item Added to Cart");
  
}

function LoadCartItems(){
var tbody = document.getElementById("tbody");
tbody.innerHTML = " ";
for(var item of cartItems){
  
  var tr = document.createElement("tr");
  var tdName = document.createElement("td");
  var tdPrice = document.createElement("td");
  var tdPhoto = document.createElement("td");
  
  tdName.innerHTML = item.Name;
  tdPrice.innerHTML = item.Price;
  
var pic = document.createElement("img");
  pic.src = item.Photo;
  pic.width = "50";
  pic.height = "50";
  
  tdPhoto.appendChild(pic);
  
  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdPhoto);
  
  tbody.appendChild(tr);

}
  
  
}