let myLeads = []
const storedLeads = localStorage.getItem("myLeads")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

if (storedLeads) {
  myLeads = JSON.parse(storedLeads)
  render(myLeads)
}

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a href="${leads[i]}" target="_blank">${leads[i]}</a>
      </li>
    `
  }
  ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

const tabs = [{url: "https://www.linkedin.com/in/per-harald-borgen"}]

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let activeTab = tabs[0]
    let currentUrl = activeTab.url
    myLeads.push(currentUrl)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

deleteBtn.addEventListener("dblclick", function() {
  myLeads = []
  localStorage.clear()
  render(myLeads)
})

inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    inputBtn.click()
  }
})
