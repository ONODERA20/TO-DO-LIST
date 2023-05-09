const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");

// Add a task to the list
function addTask() {
  const task = taskInput.value;
  const date = dateInput.value;
  if (task === "" || date === "") {
    alert("Please enter a task and a date!");
    return;
  }
  const listItem = document.createElement("li");
  listItem.innerHTML = `${task} <span>${date}</span><button onclick="deleteTask(this)">Delete</button>`;
  taskList.appendChild(listItem);
  taskInput.value = "";
  dateInput.value = "";
}

// Delete a task from the list
function deleteTask(button) {
  button.parentNode.remove();
}

// Listen for "Enter" key press
taskInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});