var showtable = [
    {
        first: "Rado Watch",
        output1:'<img src="https://media.istockphoto.com/id/478002616/photo/rado-sintra-chrono-mens-luxury-watch.jpg?s=612x612&w=0&k=20&c=0PzTKBhuqD1zhBWoPs--G49CDs7L8G--t4nCly0A-Fk="width="145px" height="100px" style="border: 5px solid orange;border-radius:10px">',
        second: "2",
        third: 20000,
        forth: "40000", id: 1
    },
    {
        first: "I-Phone 13",
        output1:'<img src="https://media.istockphoto.com/id/1190447864/photo/apple-iphone-11-pro-gray-smartphone.jpg?s=612x612&w=0&k=20&c=zETLJeguLoTEFBNKPl1vjPY1lvPW1uM6GPpyiMSvsC0="width="145px" height="100px" style="border: 5px solid orange;border-radius:10px">',
        second: "3",
        third: 30000,
        forth: "90000", id: 2
    }
];

function displayTableData() {
    var k = "<table border='4' class='table' id='tb'>";
    setTimeout(() => {
       
        k += "<tr>";
        k += "<th>" + 'S No.' + "</th>";
        k += "<th>" + 'Items Name' + "</th>";
        k += "<th>" + 'Image' + "</th>";
        k += "<th>" + 'Quantity' + "</th>";
        k += "<th>" + 'Price' + "</th>";
        k += "<th>" + 'Item Total' + "</th>";
        k += "<th>" + 'Remove' + "</th>";
        k += "</tr>";
    ;
        for (var i = 0; i < showtable.length; i++) {
            var sno = i + 1;
            k += "<tr>";
            k += "<td>" + sno + "</td>";
            k += "<td>" + showtable[i].first + "</td>";
            k += "<td>" + `${showtable[i].output1}</td>`;
            k += "<td>" + showtable[i].second + "</td>";
            k += "<td>" + showtable[i].third + "</td>";
            k += "<td>" + showtable[i].forth + "</td>";
            k += "<td>" + `<button type="button" class="button btn-danger" onclick='removeItem(${showtable[i].id})'>Remove</button>` + "</td>";
            k += "</tr>";

        }
        k += "</table>";
        document.getElementById("table").innerHTML = k
    }, 200);

}
function multiply() {
    var x = document.getElementById("second").value;
    var y = document.getElementById("third").value;
    var z = parseInt(x) * parseInt(y);
    document.getElementById("forth").value = z;
}

displayTableData();


function addOnClick() {
    var first = document.getElementById('first').value;
    var output1 = document.querySelector('#img').files[0];
    var second = document.getElementById('second').value;
    var third = document.getElementById('third').value;
    var forth = document.getElementById('forth').value;
    if (first && output1 && second && third && forth) {
        let id = showtable.length + 1;
        let previewimg=`<img src='${URL.createObjectURL(output1)}' style="width: 145px; height: 100px; border: 5px solid orange;border-radius:10px">`;
        showtable.push({ first: first, output1: previewimg, second: second, third: third, forth: forth, id: id })
        displayTableData();
        clearItems();
    }
}

function clearItems() {
    document.getElementById('first').value = ""
    document.querySelector("#img").value = ""
    document.getElementById('second').value = ""
    document.getElementById('third').value = ""
    document.getElementById('forth').value = ""
}


function removeItem(rec) {
    console.log(rec);

    var filt = showtable.filter((a, i) => {
        if (rec == a.id) {
            showtable.splice(i, 1);
            displayTableData();
        }
    })
} 
function search0() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ini");
    filter = input.value.toUpperCase();
    table = document.getElementById("tb");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function search1() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ini1");
    filter = input.value.toUpperCase();
    table = document.getElementById("tb");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function search2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ini2");
    filter = input.value.toUpperCase();
    table = document.getElementById("tb");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function search3() {
    
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ini3");
    filter = input.value.toUpperCase();
    table = document.getElementById("tb");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function search4() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ini4");
    filter = input.value.toUpperCase();
    table = document.getElementById("tb");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function Previewfile1(event) {
    var output = document.getElementById('output1');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src)
    }
  }


