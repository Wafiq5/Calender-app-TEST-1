import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-98438-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items")

const cartAppInputField = document.querySelector("#cartAppInputField");
const cartAppSubmitButton = document.querySelector("#cartAppSubmitButton");
const cartAppAddedItemsContainer = document.querySelector("#cartAppAddedItemsContainer")

cartAppSubmitButton.addEventListener("click", function (){
    let inputValue = cartAppInputField.value;
    if (!inputValue){
        alert("Please enter an item")
    }else {
        push(itemsInDB, inputValue);
        console.log(`${inputValue} added to DB`);

        const addedItemDiv = document.createElement("div");
        addedItemDiv.classList.add("cart-app-items");
        addedItemDiv.textContent = inputValue;
        cartAppAddedItemsContainer.append(addedItemDiv);
    }
    cartAppInputField.value = "";
});