function addTask() {
  let inTask = document.getElementById("inTask");
  let task = inTask.value.trim();

  if (task == "") {
    alert("Please enter a valid Task");
    inTask.focus();
    return;
  }

  let ulList = document.getElementById("task-list");
  let li = document.createElement("li");
  let text = document.createTextNode(task);
  li.className = "task-item";
  li.appendChild(text);
  ulList.appendChild(li);

  inTask.value = "";
  inTask.focus();
}

const btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", addTask);
function selectTask() {
  let arr = document.getElementsByTagName("li");
  let tamArr = arr.length;

  let indice = 0;

  if (tamArr == 0) {
    alert("No tasks to select");
    return;
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].className == "taskSelected") {
      arr[j].className = "task-item";
      indice = j + 1;
      break;
    }
  }

  if (indice == tamArr) {
    indice = 0;
  }

  arr[indice].className = "taskSelected";
}

const btSelect = document.getElementById("btSelect");
btSelect.addEventListener("click", selectTask);

function removeTask() {
  let parent = document.getElementById("task-list");
  let arr = document.getElementsByTagName("li");
  let tamArr = arr.length;

  if (tamArr == 0) {
    alert("No tasks to delete");
    return;
  }

  let pos = -1;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].className == "taskSelected") {
      pos = j;
      break;
    } else {
      alert("No one task selected for deletion!");
      return;
    }
  }

  if (pos !== -1 && confirm("Do you really want to delete this task?")) {
    parent.removeChild(arr[pos]);
  }

localStorage.clear();
}

const btRemove = document.getElementById("btRemove");
btRemove.addEventListener("click", removeTask);

function saveTask() {
  let arr = document.getElementsByTagName("li");

  if (arr.length == 0) {
    alert("No tasks to save!");
    return;
  }

  let list = "";

  for (let i = 0; i < arr.length; i++) {
    list += arr[i].textContent + ";";
  }

  localStorage.setItem("list", list.substring(0, list.length - 1));

  if (localStorage.getItem("list")) {
    alert(`Saved!`);
  }
}

const btSave = document.getElementById("btSave");
btSave.addEventListener("click", saveTask);

function recoverTask() {
  let arr = [];
  if (localStorage.getItem("list")) {
    arr = localStorage.getItem("list").split(";");
  }

  let ulList = document.getElementById("task-list");

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(arr[i]);
    li.className = "task-item";
    li.appendChild(text);
    ulList.appendChild(li);
  }
}

recoverTask();
