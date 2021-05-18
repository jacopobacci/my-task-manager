// Task: create a todo app

// 1. Display the message with the questions V
// 2. Give the possibility to enter a choice with a number input between 1 and 5
// 3. Develop the logic of the single options
// 3.1 Show all the tasks
// 3.2 Add a task
// 3.3 Delete a task
// 3.4 Mark the task as done
// 3.5 Exit the task manager

let allTasks = [];
let selectP = document.querySelector('.add-task-before');

const taskManager = () => {
  let action = document.querySelector('#action').value;
  let allTasks = [];
  if (action == 1 && allTasks.length === 0) {
    addTaskBefore();
  } else if (action == 1 && allTasks.length !== 0) {
    if (selectP) {
      selectP.remove();
    }
    const list = document.querySelector('.task-list');
    list.style.setProperty('display', 'block');
  } else if (action == 2) {
    if (selectP) {
      selectP.remove();
    }
    document.querySelector('.add-task').style.setProperty('display', 'block');
  } else if (action == 3) {
    if (selectP) {
      selectP.remove();
    }
    document.querySelector('.delete-task').style.setProperty('display', 'block');
  } else if (action == 4) {
    if (selectP) {
      selectP.remove();
    }
    document.querySelector('.task-done').style.setProperty('display', 'block');
  } else {
    if (selectP) {
      selectP.remove();
    }
    exitProgram();
  }
};

const addTaskBefore = () => {
  const p = document.createElement('p');
  p.className = 'add-task-before';
  p.innerText = 'Add one or more task to display the task list...';
  const enterNumberForm = document.querySelector('.enter-number');
  enterNumberForm.append(p);
};

const addTask = () => {
  // extract the value of text
  let singleTask = document.getElementById('task').value;
  // push into tasks array
  allTasks.push(singleTask);
  // select empty list html
  const list = document.querySelector('.task-list');
  list.style.setProperty('display', 'block');
  // create list item
  const item = document.createElement('li');
  // insert the text into it
  item.innerText = `${singleTask}`;
  // render into the html
  list.append(item);
};

const deleteTask = () => {
  const list = document.querySelector('.task-list');
  list.style.setProperty('display', 'block');
  // extract which task you want to delete and find the index
  let taskToDelete = document.getElementById('delete').value;
  // delete the task
  if (taskToDelete - 1 > -1) {
    allTasks.splice(taskToDelete, 1);
  }
  // display the tasks
  console.log(allTasks);
  const item = document.querySelector(`.task-list li:nth-of-type(${taskToDelete})`);
  item.remove();
};

const taskDone = () => {
  const list = document.querySelector('.task-list');
  list.style.setProperty('display', 'block');
  let completedTask = document.getElementById('done').value;
  const item = document.querySelector(`.task-list li:nth-of-type(${completedTask})`);
  // apply line through to the element
  item.style.setProperty('text-decoration', 'line-through');
};

const exitProgram = () => {
  document.querySelector('.exit-message').style.setProperty('display', 'block');
  document.querySelector('.task-manager').style.setProperty('display', 'none');
};
