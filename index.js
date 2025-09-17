import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js"

const firebaseConfig = {

  }

const app = initializeApp(firebaseConfig);
console.log(app)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabbtn = document.getElementById("tab-btn")



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

tabbtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
         myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
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

