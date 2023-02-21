function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("inputField").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Write a task to add it to your list");
    } else {
      document.getElementById("myList").appendChild(li);
    }
    document.getElementById("inputField").value = "";
    inputField.value = "";
    
}