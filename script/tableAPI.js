// Call the API
const data = fetch('https://capsules-asb6.herokuapp.com/api/teacher/mordi').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (userData) {
	return userData;
});

async function getUser(arr) {
    const response = await fetch(arr);
    const data = await response.json();
    return data;
  }
data.then( (data) => {
    var table = document.querySelector("table");
    let arr = [];
    let url;
    let info;
    let obj = {};
    let result = [];
    for (let i = 0; i < data.length; i++) {
        url = 'https://capsules-asb6.herokuapp.com/api/user/' + data[i].id;
        arr.push(url);
    }
    for (let j = 0; j < arr.length; j++) {
        info = getUser(arr[j]);
        info.then((data) => {
           var row = table.insertRow(1);
           var cell1 = row.insertCell(0);
           var cell2 = row.insertCell(1);
           var cell3 = row.insertCell(2);
           var cell4 = row.insertCell(3);
           var cell5 = row.insertCell(4);
           var cell6 = row.insertCell(5);
           var cell7 = row.insertCell(6);
           var cell8 = row.insertCell(7);
           cell1.innerHTML = data.id;
           cell2.innerHTML = data.firstName;  
           cell3.innerHTML = data.lastName;  
           cell4.innerHTML = data.capsule;
           cell5.innerHTML = data.age;
           cell6.innerHTML = data.city;
           cell7.innerHTML = data.gender;
           cell8.innerHTML = data.hobby;

        });
    }
 
});  
   





// async function getUser() {
//   const response = await fetch('https://capsules-asb6.herokuapp.com/api/teacher/mordi')
//   const data = await response.json()
//   table(data);
// }

// function table(data) {
//   // the first row in the table
//   let dataTable = "<table>";
//   dataTable = dataTable + "<tr class='firstRow'>";
//   dataTable = dataTable + `<td id="trId" class="tableHead leftRadius"> ID </td>`
//   dataTable = dataTable + `<td class="tableHead"> Name </td>`;
//   dataTable = dataTable + `<td class="tableHead"> LastName </td>`;
//   dataTable = dataTable + `<td id="1" class="tableHead"> Capsule </td>`;
//   dataTable = dataTable + `<td id="2" class="tableHead"> Age </td>`;
//   dataTable = dataTable + `<td id="3" class="tableHead"> City </td>`;
//   dataTable = dataTable + `<td id="4" class="tableHead"> Gender </td>`;
//   dataTable = dataTable + `<td id="5" class="tableHead rightRadius"> Hobby </td>`;
//   dataTable = dataTable + "</tr>";

  















































// async function getUser() {
//   const response = await fetch('https://capsules-asb6.herokuapp.com/api/teacher/mordi')
//   const data = await response.json()
//   table(data);
// }

// function table(data) {
//   // the first row in the table
//   let dataTable = "<table>";
//   dataTable = dataTable + "<tr class='firstRow'>";
//   dataTable = dataTable + `<td id="trId" class="tableHead leftRadius"> ID </td>`
//   dataTable = dataTable + `<td class="tableHead"> Name </td>`;
//   dataTable = dataTable + `<td class="tableHead"> LastName </td>`;
//   dataTable = dataTable + `<td id="1" class="tableHead"> Capsule </td>`;
//   dataTable = dataTable + `<td id="2" class="tableHead"> Age </td>`;
//   dataTable = dataTable + `<td id="3" class="tableHead"> City </td>`;
//   dataTable = dataTable + `<td id="4" class="tableHead"> Gender </td>`;
//   dataTable = dataTable + `<td id="5" class="tableHead rightRadius"> Hobby </td>`;
//   dataTable = dataTable + "</tr>";
  
//   // insert the data from the api to the table.
//   for (let i = 0; i < data.length; i++) {
//     // to use with buttons
//     // const personId = data[i].id;
//     // const personFirstName = data[i].firstName;
//     // const personLastName = data[i].lastName;

//           dataTable = dataTable + "<tr>";

//           // dataTable = dataTable + `<td> ${personId} </td>`;
//           // dataTable = dataTable + `<td> ${personFirstName} </td>`;
//           // dataTable = dataTable + `<td> ${personLastName} </td>`;
          
//           // // for edit and delete buttons
//           // dataTable = dataTable + `<td><button class="editBtn">Edit</button></td>`;  
//           // dataTable = dataTable + `<td><button class="editBtn">Cancel</button></td>`;  
       

//           dataTable = dataTable + `<td class="innerTable"> <h5 class="h5"> ${data[i].id} </h5></td>`;
//           dataTable = dataTable + `<td class="innerTable"> <p class="name"> ${data[i].firstName} </p></td>`;
//           dataTable = dataTable + `<td class="innerTable"> <p class="name"> ${data[i].lastName} </p></td>`;
//           dataTable = dataTable + "</tr>";
//       }
      
//       dataTable = dataTable + "</table>";
//       document.querySelector(".table").innerHTML = dataTable;  
//       // userInfo(data, dataTable);
// =======
//           dataTable = dataTable + `<td class="innerTable"> <h5 class="h5"> ${data[i].id} </h5></td>`;
//           dataTable = dataTable + `<td class="innerTable"> <p class="name"> ${data[i].firstName} </p></td>`;
//           dataTable = dataTable + `<td class="innerTable"> <p class="name"> ${data[i].lastName} </p></td>`;
//           dataTable = dataTable + "</tr>";
//       }
      
//       dataTable = dataTable + "</table>";
//       document.querySelector(".table").innerHTML = dataTable;  
//       // userInfo(data, dataTable);
// }
// getUser();

// info for every user from the second api
// async function userInfo(data, dataTable) {
//   let arrayInfo = [];
//   let url;
//   let userId;
//   for (let i = 1; i < data.length; i++) {
//     userId = data[i].id;
//     url = 'https://capsules-asb6.herokuapp.com/api/user/' + userId;
//     const response2 = await fetch(url);
//     const data2 = await response2.json();
//     arrayInfo.push(data2);
//   }
  // insertInfo(arrayInfo, dataTable);

// }
// getUser();

// // info for every user from the second api
// // async function userInfo(data, dataTable) {
// //   let arrayInfo = [];
// //   let url;
// //   let userId;
// //   for (let i = 1; i < data.length; i++) {
// //     userId = data[i].id;
// //     url = 'https://capsules-asb6.herokuapp.com/api/user/' + userId;
// //     const response2 = await fetch(url);
// //     const data2 = await response2.json();
// //     arrayInfo.push(data2);
// //   }
//   // insertInfo(arrayInfo, dataTable);
// // }


// // function insertInfo (arrayInfo, dataTable) {
// //      console.log(arrayInfo);
// //     for (let j = 0; j < 4; j++) {
// //     const parenttbl = document.getElementsByTagName("tr");
// //     const newel = document.createElement('td');
// //     const elementid = document.getElementsByTagName("td").length
//     // newel.setAttribute('id',elementid);
//     // newel.setAttribute('id',elementid);
//     // newel.innerHTML = arrayInfo.capsule;
//     // newel.innerHTML = arrayInfo.age;
//     // newel.innerHTML = arrayInfo.city;
//     // newel.innerHTML = arrayInfo.gender;
//     // newel.innerHTML = arrayInfo.hobby;
//     // parenttbl[j].appendChild(newel);  



// // dataTable = dataTable + `<td id="6"> button </td>`; 
// //   dataTable = dataTable + `<td id="7"> button </td>`;
// // }
  
   
//              // for (let i = 0; i < data.length; i++) {
//     // dataTable = dataTable + `<td> ${data[1].capsule} </td>`;
//     // dataTable = dataTable + `<td> ${data[2].age} </td>`;
//     // dataTable = dataTable + `<td> ${data[3].city} </td>`;
//     // dataTable = dataTable + `<td> ${data[4].gender} </td>`;
//     // dataTable = dataTable + `<td> ${data[5].hobby} </td>`;
//     // dataTable = dataTable + `<td> buttons </td>`
//     // document.querySelector(".table").innerHTML = dataTable


// // setTimeout(() => {
  
// //   const editButton = document.querySelector('.editBtn');
// //   editButton.addEventListener("click", editData);
// //   function editData() {
    
// //     console.log("hello");
// //   }

// // }, 1500);

