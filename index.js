import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-5bc55-default-rtdb.asia-southeast1.firebasedatabase.app/"

  }

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")


deletebtn.addEventListener("dblclick", function(){
})


inputbtn.addEventListener("click", function(){
    console.log(inputEl.value)
    inputEl.value = ""
})

function render(leads){
    listItems = ""
    for( i=0; i < leads.length; i++ ){
        listItems += `
            <li>
            <a  
                target = '_blank' href='  ${leads[i]} '> ${leads[i]}   
            </a>
        </li>
        `  
    }
    ulEl.innerHTML=listItems
}

