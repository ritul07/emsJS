let p; //global

// ARROW FUNCTION
//  to edit the Registration form
editForm = () => {
  try {
    let i = p.parentNode.parentNode.rowIndex;
    let table = document.getElementById("table");

    const ename = document.forms["myForm"]["ename"].value;
    const eid = document.forms["myForm"]["eid"].value;
    const dob = document.forms["myForm"]["dob"].value;
    const doj = document.forms["myForm"]["doj"].value;
    let des = document.forms["myForm"]["des"].value;

    let flag = validation(ename, eid, dob, doj, des);
    if (flag === false) {
        return false;
    }

    table.rows[i].cells[1].innerHTML = ename;
    table.rows[i].cells[2].innerHTML = eid;
    table.rows[i].cells[3].innerHTML = dob;
    table.rows[i].cells[4].innerHTML = doj;
    table.rows[i].cells[5].innerHTML = des;

    //  resets the form
    let frm = document.getElementsByName("myForm")[0];
    frm.reset();
} catch(err) {
    alert(`Error: ${err}`);
}
}

// sorts the table alphabetically
sortTable = (n) => {
  try {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}


// sorts the table numerically
sortTableNum = (n) => {
  try {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    dir = "asc";

    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            //check if the two rows should switch place:
            if (dir == "asc") {
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}


// searches for the keyword entered in the whole table
search = () => {
  try {
    let input, filter, table, tr, td, txt, cell, i, j;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) { //hide rows
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");

        for (j = 0; j < td.length; j++) {
            cell = tr[i].getElementsByTagName("td")[j];

            if (cell) {
                txt = cell.textContent || cell.innerHTML;
                if (txt.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }
}


// submits the Registration form
submitForm = () => {
  try {
    const ename = document.forms["myForm"]["ename"].value;
    const eid = document.forms["myForm"]["eid"].value;
    const dob = document.forms["myForm"]["dob"].value;
    const doj = document.forms["myForm"]["doj"].value;
    let des = document.forms["myForm"]["des"].value;

    let flag = validation(ename, eid, dob, doj, des);
    if (flag == false) {
        return false;
    }


    let table = document.getElementById("table");
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);


    cell2.innerHTML = ename;
    cell3.innerHTML = eid;
    cell4.innerHTML = dob;
    cell5.innerHTML = doj;
    cell6.innerHTML = des;
    cell7.innerHTML = '<input type="button" class="btn" onclick="EditRow.editRow(this)" value="EDIT">';
    cell8.innerHTML = '<input type="button" class="btn" onclick="DeleteRow.deleteRow(this)" value="DELETE">';

    //to reset the form
    let frm = document.getElementsByName("myForm")[0];
    frm.reset();

    // promise & error handling
    let myPromise = new Promise((resolve, reject) => {
      setTimeout( function() {
        resolve("Form submitted successfully!")
      }, 1000)
    })

    myPromise.then((successMessage) => {
      try {
        alert(`${successMessage}\nEmployee Name: ${ename} \nEmployee ID: ${eid}`);
    } catch(err) {
        alert(`Error: ${err}`);
    }
    })

  } catch(err) {
      alert(`Error: ${err}`);
  }
}




// validates the form
validation = (ename, eid, dob, doj, des) => {
  try {

    if (ename == "" || eid == "" || dob == "" || des == "" || doj == "") {
        alert("Please fill all the fields !");
        return false;
    }

    const enameR = /^[A-Za-z\s]+$/;
    if (enameR.test(ename) == false) {
        alert("Enter only alphabets in Employee name !");
        return false;
    }

    const desR = /^[0-9a-zA-Z\s]+$/;
    if (desR.test(des) == false) {
        alert("Enter only aplhanumeric in the Designation !");
        return false;
    }

    const eidR = /^[0-9]+$/;
    if (eidR.test(eid) == false) {
        alert("Enter only Numerals in Employee ID !");
        return false;
    }

    const db = dob.split("-");
    const birthYear = db[0];
    if (birthYear > 2000) {
        alert("Enter a date before the year 2000 !");
        return false;
    } else {
        if (birthYear < 1960) {
            alert("Enter a date after the year 1960 !");
            return false;
        }
    }

    const dateR = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
    if (dateR.test(dob) == false) {
        alert("Enter the Date Of Birth in 'YYYY-MM-DD' format");
        return false;
    }

    if (dateR.test(doj) == false) {
        alert("Enter the Date Of Joining in 'YYYY-MM-DD' format");
        return false;
    }

    const dj = doj.split("-");
    const joinYear = dj[0];
    const joinMonth = dj[1];
    const joinDay = dj[2];
    const today = new Date();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;
    const thisDay = today.getDate();
    if (joinYear > thisYear || (joinMonth > thisMonth && joinYear == thisYear) || (joinDay > thisDay && joinMonth == thisMonth && joinYear == thisYear)) {
        alert("Enter a date not after today's date!");
        return false;
    } else {
        if (joinYear < 1960) {
            alert("Enter a date after the year 1960 !");
            return false;
        }
    }
  } catch(err) {
      alert(`Error: ${err}`);
  }

}

// CLASS
// to edit the employee table details
class EditRow {
    constructor(r) {
        this.r = r;
    }

    static editRow(r) {
      try {
        p = r;
        let i = r.parentNode.parentNode.rowIndex;
        let table = document.getElementById("table");

        const ename = table.rows[i].cells[1].innerHTML;
        const eid = table.rows[i].cells[2].innerHTML;
        const dob = table.rows[i].cells[3].innerHTML;
        const doj = table.rows[i].cells[4].innerHTML;
        let des = table.rows[i].cells[5].innerHTML;

        document.forms["myForm"]["ename"].value = ename;
        document.forms["myForm"]["eid"].value = eid;
        document.forms["myForm"]["dob"].value = dob;
        document.forms["myForm"]["doj"].value = doj;
        document.forms["myForm"]["des"].value = des;
      } catch(err) {
          alert(`Error: ${err}`);
      }
    }
}

// deletes the passed row from the table
class DeleteRow {
    constructor(r) {
        this.r = r;
    }

    static deleteRow(r) {
      try {
        let i = r.parentNode.parentNode.rowIndex;
        document.getElementById("table").deleteRow(i);
      } catch(err) {
          alert(`Error: ${err}`);
      }
    }
}