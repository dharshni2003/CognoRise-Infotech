const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value==='')
    {
        alert("you must write someting!");
    }
    else
    {
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }  
    inputBox.value="";
    saveDta();

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveDta();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveDta();
    }
}
, false)

function saveDta(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();