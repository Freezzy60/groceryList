const groceries = document.getElementsByClassName("groceries")[0];
const closed = document.getElementById("closed");
const userInput = document.getElementById("userInput");
const ul = document.querySelector('ul');

let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(liMaker);
function liMaker(text){
    const li = document.createElement('li')
    li.textContent = "- " + text;
    ul.appendChild(li);
    li.addEventListener('click', function(){
            li.style.textDecoration = "line-through";
    })
}

const saveLocal = () => {
    localStorage.setItem('groceries', JSON.stringify(userInput.value))
}

closed.addEventListener("click", function() {
    localStorage.clear();
    ul.innerHTML = '';
    itemsArray = [];
})

userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    add();
})


function add(){
    itemsArray.push(userInput.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(userInput.value);
    userInput.value = "";
}

