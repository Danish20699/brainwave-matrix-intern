// Select DOM elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create task item
  const listItem = document.createElement("li");
  listItem.classList.add("todo-item");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteBtn);

  // Add the task to the list
  todoList.appendChild(listItem);

  // Clear input
  input.value = "";
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on Enter key press
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
