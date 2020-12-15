// variables
var addButton = document.getElementById("add-button");
var clearCompletedButton = document.getElementById("clear-completed-button")
var emptyListButton = document.getElementById("empty-button");
var saveListButton = document.getElementById("save-button");

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

// botones
addButton.addEventListener("click", addToDoItem);
clearCompletedButton.addEventListener("click", clearCompletedToDoItems)
emptyListButton.addEventListener("click", emptyList);
saveListButton.addEventListener("click", saveList);

// funciones

/*
Permite capturar la info en el toDoEntryBox y llama
a la funcion newToDoItem enviandole la info y el current
state de cumplición(falso)
*/
function addToDoItem(){
    //alert("Add button clicked")
    
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function clearCompletedToDoItems(){
    alert("Clear done")
}

function emptyList(){
    alert("The list will be deleted")
}

function saveList(){
    alert("Saved")
}

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}