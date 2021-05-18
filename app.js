let allTasks = [];

const taskManager = () => {
  let action = document.querySelector('#action').value;
  let alertOne = document.querySelector('.alertOne');
  let alertOneDeleteEl = document.querySelector('.alertOne-delete');

  if (action == 1 && allTasks.length === 0) {
    createAlertOne();
  } else if (action == 1 && allTasks.length !== 0) {
    removeEl(alertOne);
    removeEl(alertOneDeleteEl);
    displayEl('.display-tasks');
  } else if (action == 2) {
    removeEl(alertOne);
    removeEl(alertOneDeleteEl);
    displayEl('.add-task');
  } else if (action == 3) {
    removeEl(alertOne);
    if (allTasks.length !== 0) {
      displayEl('.delete-task');
    } else {
      alertOneDelete();
    }
  } else if (action == 4) {
    removeEl(alertOne);
    removeEl(alertOneDeleteEl);
    displayEl('.task-done');
  } else if (action == 5) {
    removeEl(alertOne);
    removeEl(alertOneDeleteEl);
    exitProgram();
  } else {
    removeEl(alertOne);
    removeEl(alertOneDeleteEl);
    alert('You must type values between 1 and 5, to choose the options of the Task Manager');
  }
  reset('#action');
};

const reset = (el) => (document.querySelector(el).value = '');

const displayEl = (el) => document.querySelector(el).style.setProperty('display', 'block');

const removeEl = (el) => el && el.remove();

const createAlertOne = () => {
  const p = document.createElement('p');
  p.className = 'alertOne';
  p.innerText = 'Add one or more task to display the task list...';
  p.style.setProperty('color', 'red');
  const enterNumberForm = document.querySelector('.enter-number');
  enterNumberForm.append(p);
};
const alertOneDelete = () => {
  const p = document.createElement('p');
  p.className = 'alertOne-delete';
  p.innerText = 'You must have created tasks to delete one of them.';
  p.style.setProperty('color', 'red');
  const enterNumberForm = document.querySelector('.enter-number');
  enterNumberForm.append(p);
};

const addTask = () => {
  let singleTask = document.getElementById('task').value;
  allTasks.push(singleTask);
  const list = document.querySelector('.task-list');
  const displayTasks = document.querySelector('.display-tasks');
  list.style.setProperty('display', 'block');
  displayTasks.style.setProperty('display', 'block');
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
