function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');

    // Create a new list item for the task
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(li);

    // Clear the input after adding the task
    taskInput.value = '';
  }
}

function removeTask(button) {
  const taskList = document.getElementById('taskList');
  const li = button.parentElement;
  taskList.removeChild(li);
}
