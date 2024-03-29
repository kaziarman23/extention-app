// git push : 5

let myLeads = [];
const input = document.querySelector(".inputEL");
const inputBtn = document.querySelector(".inputBtn");
const ulEL = document.querySelector(".ulEL");
const deleteBtn = document.querySelector(".deleteBtn");

//this is for geting the items from the localStroge
let getItem = JSON.parse(localStorage.getItem("myLeads")); //parse will convert myLeads string to array back to origin.

if (getItem) {
    //if the localStorage is have some list item then it will render the function again in the myLeads array.
    myLeads = getItem;
    render();
}

inputBtn.addEventListener("click", function () {
    myLeads.push(input.value);
    input.value = "";

    //this is for seting the items in the localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //stringfy will convert myLeads into a string.

    render();
});

function render() {
    let listItem = "";

    for (let i = 0; i < myLeads.length; i++) {
        listItem += `
        <li>
         <a target ='_blank' href = '${myLeads[i]}'>
            ${myLeads[i]}
         </a>  
        </li>`;
    }

    ulEL.innerHTML = listItem;
}

// this is for deleting all the storage.
deleteBtn.addEventListener("click", function () {
    localStorage.clear();
    ulEL.innerHTML = "";
    myLeads = [];
});
