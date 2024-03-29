
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function renderTasks() {
   let taskList = document.getElementById("task-list");
   taskList.innerHTML = "";
   for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = task;
    let td2 = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function() {
     editTask(i);
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
     deleteTask(i);
    }
    td2.appendChild(editBtn);
    td2.appendChild(deleteBtn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    taskList.appendChild(tr);
   }
   localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask() {
   let taskInput = document.getElementById("task-input");
   let task = taskInput.value.trim();
   if (task) {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
   }
  }

  function editTask(index) {
   let task = tasks[index];
   let newTask = prompt("Enter new task:", task);
   if (newTask) {
    tasks[index] = newTask;
    renderTasks();
   }
  }

  function deleteTask(index) {
   tasks.splice(index, 1);
   renderTasks();
  }

  renderTasks();
