// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

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

// var close = document.getElementsByClassName("close");

// // Removes list items when you click X
// function removeElement() {
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//       start();
//       stop();
//     }
//   }
// }

// let todos = JSON.parse(localStorage.getItem("todo-list"));
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

// var numOfTasks = document.getElementById("list").value;
// console.log("the number of tasks is ", numOfTasks);


// const taskBox = document.querySelector(".task-box");
// showTasks();

// Pressing ENTER on the keyboard will add the task to the list
// const inputBox = document.querySelector(".additem input");
// const addBtn = document.querySelector(".additem span");
const taskBox = document.querySelector(".task-box");
const clearListBtn = document.querySelector(".clear-items button");
showTasks();


function pressEnt(event) {
  var x = event.code;
  if(x == "Enter") {
      newElement();
  }    
}

// addBtn.onclick = () => {

// }


// Clicking on the "Add" button adds a new list item
function newElement() {
  // showTasks();
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
  // showTasks();
  checkboxEl.type = "checkbox";
  checkboxEl.className = "checkbox";
  checkboxEl.id = "1";
  label.appendChild(checkboxEl);
  taskName.appendChild(t);
  label.appendChild(taskName);
  // showTasks();

  let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == null) {
    listArr = [];
  } else {
      listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(inputValue);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  // showTasks();

  if (inputValue === '') {
    alert("Your to-do goal cannot be left blank");
  } else {
    // console.log(inputValue);
    // let todos = JSON.parse(localStorage.getItem("todo-list"));

    // if (!todos) {
    //   todos = [];
    // }
    // let taskInfo = {name: inputValue, status: "pending"};
    // todos.push(taskInfo);
    // localStorage.setItem("todo-list", JSON.stringify(todos));
    document.getElementById("list").appendChild(li);
    // showTodo();
    showTasks();
  }
  document.getElementById("todo").value = "";
// show close button and deletes a list item when clicked
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  // numOfTasks++;

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      start();
      stop();
    }
  }
}

// function clearAll() {
//   console.log("clear clicked");
//   document.getElementById("list").innerHTML = "";
// }

// add task list inside ul
function showTasks(){
  let getLocalStorage = localStorage.getItem("New Todo");
  if(getLocalStorage == null) {
    listArr = [];
  } else {
      listArr = JSON.parse(getLocalStorage);
  }
  let newLiTag = '';
  const pendingNum = document.querySelector(".pendingNum");
  pendingNum.textContent = listArr.length;
  if(listArr.length > 0){
    clearListBtn.classList.add("active");
  } else {
    clearListBtn.classList.remove("active");
  }
  listArr.forEach((element, index) => {
    newLiTag += `<li class="task"><label id="1"><input type="checkbox" class= "checkbox" id="1"><p>${element}</p></label><span onclick="removeElement(${index})" class="close">×</span></li>`;
  });
  console.log("taskBox", taskBox);
  taskBox.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputValue = "";
}

// Removes list items when you click X
function removeElement(index) {
  let getLocalStorage = localStorage.getItem("New Todo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
  start();
  stop();
}

clearListBtn.onclick = () => {
  listArr = [];
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}

// var numOfTasks = document.getElementById("list").length;
// console.log("todos ", todos);
// console.log("todos.value ", todos.value);
// console.log("the number of tasks is ", todos.length);



// Make the Schedule, To-Do, and Notes columns resizable by the user
 
var sect = document.getElementsByClassName('col'); // element to make resizable
console.log("this is sect: ", sect);

var numSect = sect.length;

function showP(e) {
  for (var i = 0; i < numSect; i++) {
    sect[i].className = sect[i].className + '-resizable';
    var resizer = document.createElement('div');
    resizer.className = 'resizer';
    sect[i].appendChild(resizer);
    resizer.addEventListener('mousedown', initDrag, true);
  }
}

///

  // sect.className = sect.className + '-resizable';
  // var resizer = document.createElement('div');
  // resizer.className = 'resizer';
  // sect.appendChild(resizer);

//   for (var i = 0; i < numSect; i++) {
//     sect[i].removeEventListener('click', showP, false);
//   }
//   resizer.addEventListener('mousedown', initDrag, false);
// }

// for (var i = 0; i < numSect; i++) {
//   sect[i].addEventListener('click', showP, false);
// }



//2nd
// for (var i = 0 ; i < sect.length; i++) {
//   sect[i].addEventListener('click' , init , false ) ; 
//   sect[i].removeEventListener('click', init, false);
//   sect[i].className = sect.className + ' resizable';
//   var resizer = document.createElement('div');
//   resizer.className = 'resizer';
//   sect[i].appendChild(resizer);
//   resizer.addEventListener('mousedown', initDrag, false);
// }

//1st
// sect.addEventListener('click', function init() {
//     sect.removeEventListener('click', init, false);
//     sect.className = sect.className + ' resizable';
//     var resizer = document.createElement('div');
//     resizer.className = 'resizer';
//     sect.appendChild(resizer);
//     resizer.addEventListener('mousedown', initDrag, false);
// }, false);

var startX;
// var startY; 
var startWidth; 
// var startHeight;

function initDrag(e) {
   startX = e.clientX;
  //  startY = e.clientY;
   startWidth = parseInt(document.defaultView.getComputedStyle(sect[0]).width, 10);
  //  startHeight = parseInt(document.defaultView.getComputedStyle(sect).height, 10);
   document.documentElement.addEventListener('mousemove', doDrag, true);
   document.documentElement.addEventListener('mouseup', stopDrag, true);
}

function doDrag(e) {
   sect[0].style.width = (startWidth + e.clientX - startX) + 'px';
  //  sect.style.height = (startHeight + e.clientY - startY) + 'px';
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
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

// function officeTheme() {
//   var button2 = document.getElementsByClassName("button2");
//   button2.addEventListener("click", changeClassb2);
//   }

// function changeClassb2() {
//   document.className.replace("false","true");
// }

// const setTheme = theme => document.documentElement.className = theme;
//     document.getElementById('theme-select').addEventListener('change', function() {
//     setTheme(this.value);
//     });

//     @media (prefers-color-scheme: dark) {
//       :root {
//       --bg-color: #121212;
//       --text-color: #45ADFE;
//       }
//       }