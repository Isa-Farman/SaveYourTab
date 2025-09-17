import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-5bc55-default-rtdb.asia-southeast1.firebasedatabase.app/"

  }

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

deletebtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)

})


inputbtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
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

