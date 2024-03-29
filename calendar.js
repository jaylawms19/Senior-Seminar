var calDate = document.getElementById("date");
n =  new Date();
y = n.getFullYear();
m = n.getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
m = months[m];
d = n.getDate();
calDate.innerHTML = m + " " + d + ", " + y;
changeClass();

const longMonths = ["January", "March", "May", "July", "August", "October", "December"];

function previous() {
    if (d > 1) {
        d = d - 1;
        calDate.innerHTML = m + " " + d + ", " + y;
    } 
    else if (d == 1 && m != "January") {
        let month = months.indexOf(m);
        m = months[(month - 1) % 12];
        if (longMonths.includes(m)) {d = 31;}
        if (longMonths.includes(m) == false && m != "February") {d = 30;}
        if (m == "February" && y % 4 != 0) {d = 28;}
        if (m == "February" && y % 4 == 0) {d = 29;}
        calDate.innerHTML = m + " " + d + ", " + y;
    }
    else {
        m = "December";
        d = 31;
        y = y - 1;
        calDate.innerHTML = m + " " + d + ", " + y;
    }
    changeClass();
}

function next() {
    if (m == "February" && y % 4 != 0 && d < 28) {
        d = d + 1;
        calDate.innerHTML = m + " " + d + ", " + y;
    } else if (m == "February" && y % 4 == 0 && d < 29) {
        d = d + 1;
        calDate.innerHTML = m + " " + d + ", " + y;
    } else if (longMonths.includes(m) == false && m != "February" && d < 30) {
        d = d + 1;
        calDate.innerHTML = m + " " + d + ", " + y;
    } else if (longMonths.includes(m) && d < 31) {
        d = d + 1;
        calDate.innerHTML = m + " " + d + ", " + y;
    } else {
        d = 1;
        let month = months.indexOf(m);
        m = months[(month + 1) % 12];
        if (m == "January") {y = y + 1;}
        calDate.innerHTML = m + " " + d + ", " + y;
    }
    changeClass();
}

function changeClass() {
    calDate.className = m;
}

