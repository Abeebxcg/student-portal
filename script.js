var studentDetails = [];

function displayDetails() {
  studentName.value = "";
  GtudentMatric.value = "";
  studentDept.value = "";
  studentPass.value = "";
  document.getElementById("buttons").style.display = "block";
  table.innerHTML = `
    <tr>
    <td>Serial No</td>
    <td>Full Name</td>
    <td>Department</td>
    <td>Matric No</td>
    <td>Actions </td>
    </tr>
    `;
  for (let i = 0; i <= studentDetails.length; i++) {
    table.innerHTML += `
        <tr>
    <td>${i + 1}</td>
    <td>${studentDetails[i].fullName}</td>
    <td>${studentDetails[i].department}</td>
    <td>${studentDetails[i].matricNumber}</td>
    <td><button class="btn btn-danger mb-2" onclick="delete1(${i})">Delete</button>

    <button type="button" id="edited" onclick= "editItem(${i})" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit
    </button>

   
    </tr>    `;
  }
}

function addDetails() {
  var studentArr = {
    fullName: studentName.value,
    matricNumber: GtudentMatric.value,
    department: studentDept.value,
    password: studentPass.value,
  };
  document.getElementById("none").style.display = "none";

  if (
    studentName.value != "" &&
    GtudentMatric.value != "" &&
    studentDept.value != "" &&
    studentPass.value != ""
  ) {
    studentDetails.push(studentArr);
    document.getElementById("error").style.display = "none";
    document.getElementById("buttons").style.display = "block";

    displayDetails();
    studentName.focus();
  } else {
    document.getElementById("error").style.display = "block";
  }
}

function delete1(index) {
  studentDetails.splice(index, 1);
  displayDetails();
}

function editItem(index) {
  editedIndex = index;
}

function editDetails() {
  var editObj = {
    fullName: item1.value,
    matricNumber: item3.value,
    department: item2.value,
  };
  studentDetails.splice(editedIndex, 1, editObj);
  displayDetails();
}

function deleteFirst() {
  studentDetails.shift();
  displayDetails();
  // console.log("amariya");
}
function deleteLast() {
  studentDetails.pop();
  displayDetails();
  // console.log("amariya");
}

function addFirst() {
  studentDetails.push(studentDetails.value);
  displayDetails();
  // console.log("amariya");
}
function deleteAll() {
  studentDetails.splice(0, studentDetails.length);
  displayDetails();
  // console.log("amariya");
}
