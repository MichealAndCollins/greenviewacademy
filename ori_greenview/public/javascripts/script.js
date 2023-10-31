const teacher =  {}
function onSubmit(){
  console.log("hi")
  var username  = document.getElementById('username').value
  var password = document.getElementById('password').value
  teacherLogin = {username:username,password:password}
  fetch('http://localhost:3003/teacherdata',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(teacherLogin)})
  .then((response)=>response.json).then((data)=>{
    teacher = data
  }).catch((err)=>{
    console.log(err)
  })
}




/*function fetchDetails() {
  fetch("http://localhost:3000/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((Response) => Response.json())
    .then((data) => {
      document.getElementById("firstname").textContent = data.firstname;
      document.getElementById("lastname").textContent = data.lastname;
      document.getElementById("middlename").textContent = data.middlename;
      document.getElementById("jobtitle").textContent = data.jobtitle;
    })
    .catch((Error) => {
      console.error("Error fetching Teacher details: " + error);
    });
}
//call the function to fetch the details
fetchDetails();
const studentData = [
  {
    firstname: "Nii",
    lastname: "Ayi",
    class: "JHS1",
  },
  {
    image: "image/",
    firstname: "Junior",
    lastname: "Senior",
    class: "JHS1",
  },
  {
    image: "image/",
    firstname: "Grace",
    lastname: "Laryea",
    class: "JHS2",
  },
  {
    image: "image/",
    firstname: "Peter",
    lastname: "Gonzalez",
    class: "JHS3",
  },
  {
    image: "image/",
    firstname: "Samuel",
    lastname: "Kankam",
    class: "JHS1",
  },
];
let studentRoot = document.getElementById("student");
console.log(studentRoot);
studentData.forEach((student) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <div id="index">
  <img class="image" src="images/Bitmap-woman2.png" alt="" />
  <div class="text">
    <p>First Name: ${student.firstname}</p>
    <p>Last Name: ${student.lastname}</p>
    <p>Class: ${student.class}</p>
  </div>
</div>`;
  studentRoot.appendChild(div);
});

//slection of the selected based on the drop list of classes
function updateStudentLlist(selectedClass) {
  const studentsList = document.getElementById("student");
  studentsList.innerHTML = ""; //clear the existing list

  if (selectedClass === "all") {
    //show all the students if the all is selected
    studentData.forEach((student) => {
      studentsList.innerHTML += `
      <div id="index">
  <img class="image" src="images/Bitmap-woman2.png" alt="" />
  <div class="text">
    <p>First Name: ${student.firstname}</p>
    <p>Last Name: ${student.lastname}</p>
    <p>Class: ${student.class}</p>
  </div>
</div>
      `;
    });
  } else {
    //filter and display students based on the selected class
    studentData.forEach((student) => {
      if (student.class === selectedClass) {
        studentsList.innerHTML += `
        <div id="index">
        <img class="image" src="images/Bitmap-woman2.png" alt="" />
        <div class="text">
          <p>First Name: ${student.firstname}</p>
          <p>Last Name: ${student.lastname}</p>
          <p>Class: ${student.class}</p>
        </div>
      </div>
        `;
      }
    });
  }
}

const classFilter = document.getElementById("classDropdown");
classFilter.addEventListener("change", function () {
  updateStudentLlist(classFilter.value);
});

//initial student list display (all classes)
updateStudentLlist("all");

//clickable div for connection
const index = document.getElementById("index");
index.addEventListener("click", function () {
  //navigate to another webpage when clicked
  window.location.href = "scores.html";
});
//Report section
const reportData = {
  studentName: "Michael Adu",
  course1: "Mathematics",
  course2: "English",
  course3: "Science",
  course4: "R.M.E",
  course5: "French",
  scores: {
    maths: 92,
    english: 75,
    science: 95,
    rme: 90,
    french: 85,
  },
};

//function to display the report dynamically
function displayReport() {
  const report = document.getElementById("report-card");
  console.log(report);
  report.innerHTML = `
         <h2>Student: ${reportData.studentName}</h2>
         <h3>Student Report</h3>
         <p>${reportData.course1}:${reportData.scores.maths}</p>
         <p>${reportData.course2}:${reportData.scores.english}</p>
         <p>${reportData.course3}:${reportData.scores.science}</p>
         <p>${reportData.course4}:${reportData.scores.rme}</p>
         <p>${reportData.course5}:${reportData.scores.french}</p>
            `;
}

function printReport() {
  window.print();
}
//display the report when the page loads
window.onload = displayReport;*/
