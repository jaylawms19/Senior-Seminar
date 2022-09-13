var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var unchecked = document.getElementsByClassName("unchecked");
var close = document.getElementsByClassName("close");

// function checkElement(){
//   var checkValue = document.getElementsByClassName("unchecked").value;
//   alert(checkValue);
// }

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
  var inputValue = document.getElementById("todo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Your to-do goal cannot be left blank");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("todo").value = "";

// show close button and deletes a list item when clicked
  var span = document.createElement("SPAN");
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