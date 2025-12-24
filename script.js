let userInput = document.querySelector("#input");
let btn = document.querySelector("#btn");
let lists = document.querySelector(".lists ul");

function addTask(){
    if(userInput.value === "")return;

    let li = document.createElement("li");
    let checkBox = document.createElement("input");
    let span = document.createElement("span");
    let deleteBtn = document.createElement("button");

    checkBox.type = "checkbox";
    span.innerHTML = userInput.value;
    deleteBtn.innerText = "X";

    deleteBtn.addEventListener("click", ()=>{
        li.remove();
    });

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    lists.appendChild(li);

    checkBox.addEventListener("change", ()=>{
        span.classList.toggle("done");
    });

    userInput.value = "";
}

btn.addEventListener("click", addTask);
userInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        addTask();
    }
});
