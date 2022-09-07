var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
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

}