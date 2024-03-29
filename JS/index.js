// git push : 3

let myLeads = [];
let input = document.querySelector(".inputEL");
let inputBtn = document.querySelector(".inputBtn");
let ulEL = document.querySelector(".ulEL");

inputBtn.addEventListener("click", function () {
    myLeads.push(input.value);
    render();
    input.value = "";
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

// localStorage stuff
localStorage.setItem("user","arman")
console.log(localStorage.getItem("user"))
localStorage.clear()