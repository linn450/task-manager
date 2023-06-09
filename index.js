// adding tasks
const addTaskForm = document.getElementById('add-task-form');
const taskList = document.getElementById('task-list');



addTaskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTask = document.getElementById('new-task').value;
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(newTask));
  taskList.appendChild(li);
  addTaskForm.reset();
});



taskList.addEventListener('click', function(event) {
  if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
    if (event.target.checked) {
      event.target.parentElement.classList.add('completed');
    } else {
      event.target.parentElement.classList.remove('completed');
    }
  } else if (event.target.tagName === 'BUTTON') {
    const completedTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < completedTasks.length; i++) {
      completedTasks[i].remove();
    }
  }
});

