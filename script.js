let userInput = document.querySelector("#input");
let btn = document.querySelector("#btn");
let lists = document.querySelector(".lists ul");

lists.innerHTML = localStorage.getItem("tasks") || "";


lists.querySelectorAll("li").forEach(li => {
    let deleteBtn = li.querySelector("button");
    let checkBox = li.querySelector("input");
    let span = li.querySelector("span");

    deleteBtn.addEventListener("click", ()=>{
        li.remove();
        localStorage.setItem("tasks", lists.innerHTML);
    });

    checkBox.addEventListener("change", ()=>{
        span.classList.toggle("done");
        // CHANGED: Set checked attribute before saving
        if(checkBox.checked){
            checkBox.setAttribute("checked", "checked");
        } else {
            checkBox.removeAttribute("checked");
        }
        localStorage.setItem("tasks", lists.innerHTML);
    });
});

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
        localStorage.setItem("tasks", lists.innerHTML);
    });

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    lists.appendChild(li);

    checkBox.addEventListener("change", ()=>{
        span.classList.toggle("done");
        localStorage.setItem("tasks", lists.innerHTML);
    });

    userInput.value = "";
    localStorage.setItem("tasks", lists.innerHTML);
}

btn.addEventListener("click", addTask);
userInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        addTask();
    }
});


