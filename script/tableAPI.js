async function getUser() {
  const response = await fetch('https://capsules-asb6.herokuapp.com/api/teacher/mordi')
  const data = await response.json()
  table(data);
}
function table(data) {
  // the first row in the table
  let dataTable = "<table class='table'>";
  dataTable = dataTable + "<tr class='firstRow'>";
  dataTable = dataTable + `<td> id </td>`;
  dataTable = dataTable + `<td> Name </td>`;
  dataTable = dataTable + `<td> Last </td>`;
  dataTable = dataTable + `<td> Capsule </td>`;
  dataTable = dataTable + `<td> Age </td>`;
  dataTable = dataTable + `<td> City </td>`;
  dataTable = dataTable + `<td> Gender </td>`;
  dataTable = dataTable + `<td> Hobby </td>`;
  dataTable = dataTable + "</tr>";
    
  // insert the data from the api to the table.
     let info;
     for (let i = 0; i < data.length; i++) {
          dataTable = dataTable + "<tr>";
          dataTable = dataTable + `<td> ${data[i].id} </td>`;
          dataTable = dataTable + `<td> ${data[i].firstName} </td>`;
          dataTable = dataTable + `<td> ${data[i].lastName} </td>`;
          // userInfo(data[i].id);
          // async function userInfo(userId) {
          //   let url = 'https://capsules-asb6.herokuapp.com/api/teacher/mordi/' + userId;
          //   console.log(url);
          //   const response2 = await fetch(url);
          //   const data2 = await response2.json();
          //   // dataTable = dataTable + `<td> ${data2.capsule} </td>`;
          //   // dataTable = dataTable + `<td> ${data2.age} </td>`;
          //   // dataTable = dataTable + `<td> ${data2.city} </td>`;
          //   // dataTable = dataTable + `<td> ${data2.gender} </td>`;
          //   // dataTable = dataTable + `<td> ${data2.hobby} </td>`;
          // }         
          // for edit and delete buttons
          // dataTable = dataTable + `<td> buttons </td>`;  
        }
         
      dataTable = dataTable + "</tr>";
      dataTable = dataTable + "</table>";
      document.querySelector(".table").innerHTML = dataTable;
}
getUser();



