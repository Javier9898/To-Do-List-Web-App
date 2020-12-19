// variables
var addButton = document.getElementById("add-button");
var clearCompletedButton = document.getElementById("clear-completed-button")
var emptyListButton = document.getElementById("empty-button");

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

// botones
addButton.addEventListener("click", addToDoItem);
clearCompletedButton.addEventListener("click", clearCompletedToDoItems)
emptyListButton.addEventListener("click", emptyList);

// funciones

/*
Permite capturar la info en el toDoEntryBox y llama
a la funcion newToDoItem enviandole la info y el current
state de cumplición(falso)
*/
function addToDoItem(){
    //alert("Add button clicked");
    
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function clearCompletedToDoItems(){
    clearCompletedToDoItems();
    alert("Clear done");
}

function emptyList(){
    //alert("The list will be deleted");
    emptyList();
}

/*
Agrega el mensaje a la lista.
Al hacerle doble click a este mensaje, se llama a la
función toggleToDoItemState el cual lo marca como completado
o no completado
*/
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

/*
Agarra los elementos de la lista marcados como completado y
los elimina
*/
function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}
