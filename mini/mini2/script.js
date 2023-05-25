var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["age"] = document.getElementById("age").value;
    formData["contact"] = document.getElementById("contact").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("passengerList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.gender;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.contact;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.address;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[1].innerHTML;
    document.getElementById("age").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
    document.getElementById("address").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.gender;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.contact;
    selectedRow.cells[4].innerHTML = formData.address;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("passengerList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}