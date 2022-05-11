async function getUser() {
  const response = await fetch('https://capsules-asb6.herokuapp.com/api/teacher/mordi')
  const data = await response.json()
  table(data);
}

function table(data) {
  
  // the first row in the table
  let dataTable = "<table class='table'>";
  dataTable = dataTable + "<tr>";
  dataTable = dataTable + `<td> id </td>`;
  dataTable = dataTable + `<td> Name </td>`;
  dataTable = dataTable + `<td> Last </td>`;
  dataTable = dataTable + "</tr>";
  
  // insert the data from the api to the table.
  for (let i = 0; i < data.length; i++) {
    // to use with buttons
    const personId = data[i].id;
    const personFirstName = data[i].firstName;
    const personLastName = data[i].lastName;

          dataTable = dataTable + "<tr>";
          dataTable = dataTable + `<td> ${personId} </td>`;
          dataTable = dataTable + `<td> ${personFirstName} </td>`;
          dataTable = dataTable + `<td> ${personLastName} </td>`;
          
          // for edit and delete buttons
          dataTable = dataTable + `<td><button class="editBtn">Edit</button></td>`;  
          dataTable = dataTable + `<td><button class="editBtn">Cancel</button></td>`;  
       
      }
      dataTable = dataTable + "</tr>";
      dataTable = dataTable + "</table>";
      document.querySelector(".table").innerHTML = dataTable;
}
getUser();


setTimeout(() => {
  
  const editButton = document.querySelector('.editBtn');
  editButton.addEventListener("click", editData);
  function editData() {
    
    console.log("hello");
  }

}, 1500);

