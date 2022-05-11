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
          dataTable = dataTable + "<tr>";
          dataTable = dataTable + `<td> ${data[i].id} </td>`;
          dataTable = dataTable + `<td> ${data[i].firstName} </td>`;
          dataTable = dataTable + `<td> ${data[i].lastName} </td>`;
          // for edit and delete buttons
          dataTable = dataTable + `<td> buttons </td>`;  
      }
      dataTable = dataTable + "</tr>";
      dataTable = dataTable + "</table>";
      document.querySelector(".table").innerHTML = dataTable;
}
getUser();


