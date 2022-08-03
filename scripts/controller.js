import { operations } from "./model.js";

window.addEventListener("load", bindEvents);

function bindEvents() {
  document.querySelector("#create").addEventListener("click", addStudent);
}

function addStudent() {
  // const id=document.querySelector('#id').value;
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  const name = document.querySelector("#name").value;
  const roll = document.querySelector("#roll").value;
  const standard = document.querySelector("#standard").value;
  const section = document.querySelector("#section").value;

  const student = operations.create(id, name, roll, standard, section);

  addToTable(student);
}

function addToTable(student) {
  const tbody = document.querySelector("#studentList");

  var tr = tbody.insertRow();

  var cellNumber = 0;
  for (var key in student) {
    // if (key === "markAsDeleted" || typeof student[key] === "function") {
    //   continue;
    // }
    if (key === "id") {
      continue;
    }
    var th = tr.insertCell(cellNumber);

    th.innerHTML = student[key];

    cellNumber++;
  }

  var oper = tr.insertCell(cellNumber);

  oper.appendChild(createIcon(student.id, "trash", deleteStudent));
  oper.appendChild(createIcon(student.id, "pen-to-square", editStudent));
}

function createIcon(id, className, func) {
  let icon = document.createElement("i");

  icon.className = `fa-solid fa-${className} me-2 hand`;
  icon.setAttribute("student-id", id);
  icon.setAttribute("role", "button");
  icon.addEventListener("click", func);

  return icon;
}

function editStudent() {
  
}

function deleteStudent() {
  var StudentId = this.getAttribute("student-id");

  var icon = this;
  var row = icon.parentNode.parentNode;
  
  const studentList=operations.delete(StudentId);
  
  row.replaceChildren();
}
