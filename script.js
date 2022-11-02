var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// starting the confetti animation when task is completed
const start = () => {
  setTimeout(function() {
      confetti.start()
  }, 500);
};

// stopping the confetti animation after the task is completed
const stop = () => {
  setTimeout(function() {
      confetti.stop()
  }, 1000); // stops after 3 second
};

var close = document.getElementsByClassName("close");

// Removes list items when you click X
function removeElement() {
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      start();
      stop();
    }
  }
}

let todos = JSON.parse(localStorage.getItem("todo-list"));
// taskBox = document.querySelector(".task-box");


// const taskInput = document.querySelector(".additem input"),
// taskBox = document.querySelector(".task-box");
// console.log(taskBox, "yeah");

// let todos = JSON.parse(localStorage.getItem("todo-list"));

// function showTodo() {
//   let li = "";
//   todos.forEach((todo, id) => {
//     li += `<li class="task">
//                 <label id="${id}">
//                     <input type="checkbox" class= "checkbox" id="${id}">
//                     <p>${todo.name}</p>
//                 </label>
//                 <span onclick="removeElement()" class="close">×</span>
//             </li>`;
//   });
//   taskBox.innerHTML = li;
// }
// showTodo();

// Clicking on the "Add" button adds a new list item
function newElement() {
  var li = document.createElement("li");
  li.className = "task";
  var label = document.createElement("label");
  label.id = "1";
  li.appendChild(label);
  var inputValue = document.getElementById("todo").value;
  // console.log(inputValue);
  var t = document.createTextNode(inputValue);
  var taskName = document.createElement("p");
  var checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.className = "checkbox";
  checkboxEl.id = "1";
  label.appendChild(checkboxEl);
  taskName.appendChild(t);
  label.appendChild(taskName);
  if (inputValue === '') {
    alert("Your to-do goal cannot be left blank");
  } else {
    console.log(inputValue);
    // let todos = JSON.parse(localStorage.getItem("todo-list"));
    if (!todos) {
      todos = [];
    }
    let taskInfo = {name: inputValue, status: "pending"};
    todos.push(taskInfo);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    document.getElementById("list").appendChild(li);
    // showTodo();
  }
  document.getElementById("todo").value = "";
// show close button and deletes a list item when clicked
  var span = document.createElement("SPAN");
  console.log("close button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      start();
      stop();
    }
  }
}

// saving todo items in local storage

//const taskInput = document.querySelector(".additem input");
// const taskInput = document.querySelector(".addBtn enter");


// inputValue.addEventListener("keyup", e => {
//   let userTask = inputValue;
//   if(e.key == "Enter") {
//     console.log(userTask);
//   }
// })


// inputValue.addEventListener("keyup", e => {
//   console.log(inputValue, "howdy");
//   if(e.key == "Enter" && inputValue) {
//     // if(e.key == userTask) {
//     console.log(userTask, "partner");
//   }
// })

// taskBox = document.querySelector(".task-box");

// function showTodo() {
//   todos.forEach((todo,id) => {
//     console.log(id, todo);
//   })


  // let li = "";
  // todos.forEach((todo, id) => {
  //   li += `<li class="task">
  //               <label id="${id}">
  //                   <input type="checkbox" class= "checkbox" id="${id}">
  //                   <p>${todo.name}</p>
  //               </label>
  //               <span onclick="removeElement()" class="close">×</span>
  //           </li>`;
  // })
  // taskBox.innerHTML = li;
// }
// showTodo();