const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  // console.log(searchForm);
});

import {
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from "./firebase.js";

//data base connet to items work

const form = document.querySelector(".form");
const itemName = document.querySelector("#product-name");
const itemPrice = document.querySelector("#product-price");
const itemDetail = document.querySelector("#product-detail");
const itemImg = document.querySelector("#product-img");
const buttonProduct = document.querySelector(".add-product-btn");
const newProduct = document.querySelector("#product-container");
// console.log(form);

const myCollection = collection(db, "products");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
  

  buttonProduct.innerText = "loading...";

  const myProducts = {
    itemName: itemName.value,
    itemPrice: Number(itemPrice.value),
    itemImg: null,
    itemDetail: itemDetail.value,
    createdAt: serverTimestamp(),
  };
  try {
    await addDoc(myCollection, myProducts);

    console.log("document add hogya hy");
  } catch (e) {
    console.log("Error adding document: ", e);
  }
});

const querySnapshot = await getDocs(myCollection);

querySnapshot.forEach((doc) => {
  const product = doc.data();
  const date = product.createdAt
    ? dateFns.formatDistance(product.createdAt?.toDate(), new Date(), {
        addSuffix: true, 
        //true mening now added
      })
    : "";
    newProduct.innerHTML += `<div>
    <!-- <img src="" alt=""> -->
    <h3>${product.itemName?.toUpperCase()}</h3>
    <span>${date}</span>
    <p class="price">Rs.${product.itemPrice}</p>
    <p>${product.itemDetail}</p>
  </div>`;
});
onSnapshot(myCollection, (doc) => {
    newProduct.innerHTML = "";
  
    doc.docs.forEach((eachDoc, index) => {
      const product = eachDoc.data();
  
      newProduct.innerHTML += `<div>
          ${index + 1}
          <h3>${product.itemName}</h3>
          <span>${product.createdAt?.toDate()}</span>
          <p class="price">Rs.${product.itemPrice}</p>
          <p>${product.itemDetail}</p>
        </div>`;
    });
  });
