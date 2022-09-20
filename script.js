var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

// Removes list items when you click X
function removeElement() {
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Clicking on the "Add" button adds a new list item
function newElement() {
  var li = document.createElement("li");
  li.className = "task";
  var label = document.createElement("label");
  label.id = "1";
  li.appendChild(label);
  var inputValue = document.getElementById("todo").value;
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
    document.getElementById("list").appendChild(li);
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
    }
  }
}