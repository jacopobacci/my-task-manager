let allTasks = [];

const taskManager = () => {
  let action = document.querySelector('#action').value;
  let alert = document.querySelector('.alert');
  let alertDeleteEl = document.querySelector('.alert-delete');

  if (action == 1 && allTasks.length === 0) {
    createAlert();
  } else if (action == 1 && allTasks.length !== 0) {
    removeEl(alert);
    removeEl(alertDeleteEl);
    const list = document.querySelector('.task-list');
    list.style.setProperty('display', 'block');
  } else if (action == 2) {
    removeEl(alert);
    removeEl(alertDeleteEl);
    displayEl('.add-task');
  } else if (action == 3) {
    removeEl(alert);
    if (allTasks.length !== 0) {
      displayEl('.delete-task');
    } else {
      alertDelete();
    }
  } else if (action == 4) {
    removeEl(alert);
    removeEl(alertDeleteEl);
    displayEl('.task-done');
  } else {
    removeEl(alert);
    removeEl(alertDeleteEl);
    exitProgram();
  }
  reset('#action');
};

const reset = (el) => {
  document.querySelector(el).value = '';
};

const displayEl = (el) => {
  document.querySelector(el).style.setProperty('display', 'block');
};

const removeEl = (el) => {
  el && el.remove();
};

const createAlert = () => {
  const p = document.createElement('p');
  p.className = 'alert';
  p.innerText = 'Add one or more task to display the task list...';
  p.style.setProperty('color', 'red');
  const enterNumberForm = document.querySelector('.enter-number');
  enterNumberForm.append(p);
};
const alertDelete = () => {
  const p = document.createElement('p');
  p.className = 'alert-delete';
  p.innerText = 'You must have created tasks to delete one of them';
  p.style.setProperty('color', 'red');
  const enterNumberForm = document.querySelector('.enter-number');
  enterNumberForm.append(p);
};

const addTask = () => {
  let singleTask = document.getElementById('task').value;
  allTasks.push(singleTask);
  const list = document.querySelector('.task-list');
  list.style.setProperty('display', 'block');
  const item = document.createElement('li');
  localStorage.setItem('task', `${singleTask}`);
  item.innerText = `${localStorage.getItem('task')}`;
  list.append(item);
  reset('#task');
};

const deleteTask = () => {
  const list = document.querySelector('.task-list');
  list.style.setProperty('display', 'block');
  let taskToDelete = document.getElementById('delete').value;
  if (taskToDelete - 1 > -1) {
    allTasks.splice(taskToDelete, 1);
  }
  console.log(allTasks);
  const item = document.querySelector(`.task-list li:nth-of-type(${taskToDelete})`);
  item.remove();
  reset('#delete');
};

const taskDone = () => {
  const list = document.querySelector('.task-list');
  list.style.setProperty('display', 'block');
  let completedTask = document.getElementById('done').value;
  const item = document.querySelector(`.task-list li:nth-of-type(${completedTask})`);
  item.style.setProperty('text-decoration', 'line-through');
  reset('#done');
};

const exitProgram = () => {
  document.querySelector('.exit-message').style.cssText = 'display: block;color:red';
  document.querySelector('.task-manager').style.setProperty('display', 'none');
};
