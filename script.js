//list-group ul
//list-group-item

const inputbox= document.querySelector(".inputbox")
const listcontainer= document.querySelector(".list-group")




function input(){
    if (inputbox.value===""){
        alert("you need to write something")
    }
    else{
   // Create a wrapper div for the checkbox and task
let div = document.createElement('div');
div.classList.add('checkbox-wrapper-11'); // Add the class to the div

// Append the div to the list container
listcontainer.appendChild(div);

// Create the checkbox
let checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("id", "02-11");
checkbox.setAttribute("name", "r");
checkbox.setAttribute("value", "2");
checkbox.setAttribute("style","background: rgba(0, 0, 0, 0.2); border-radius: 20px")

// Append the checkbox to the wrapper div
div.appendChild(checkbox);

// Create the list item (li)
let li = document.createElement('li');
li.textContent = inputbox.value; // Set the inputbox value as the list item text

// Append the list item to the wrapper div (next to the checkbox)
div.appendChild(li);

// Clear the input box
inputbox.value = "";

// Create a span with the trash icon
let span = document.createElement('span');
span.innerHTML = '<i class="delete  far fa-trash-alt "></i>'; // Add the trash icon

// Append the span (trash icon) to the list item
li.appendChild(span);

span.querySelector('.delete').addEventListener("click", function(){
    div.remove();
})
}
}

     

