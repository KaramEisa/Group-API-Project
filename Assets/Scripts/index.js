
//! JS – Bootcamp capsules

//? 1. Test the api calls with postman
//? 2. Create an editable table with the data you are getting.
//? 3. Create a button that can remove the row from your UI.
//? 4. Create a button that can edit your row. Once you click

const body = document.querySelector('body');
const container = document.querySelector('.container');


// const getArrOfPeople = async () => {
  
//     const res = fetch('https://capsules-asb6.herokuapp.com/api/teacher/mordi');
//     console.log(res);
// };

fetch('https://capsules-asb6.herokuapp.com/api/teacher/mordi').then((res) => {
    return res.json();
    
}).then((data) => {


})




export const createGameBoard = (row, column) => {
  let gameTable = table(arryOfCards, row, column);
  gameTable = gameTable + "</table>";
  document.getElementById("flashcard").innerHTML = gameTable;
  assignIds();
  const gameBoard = document.querySelector(".table");
  gameBoard.addEventListener("click", addClickEvent);
}


const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keyup', (e) => {
      
      const searchName = e.target.value.toLowerCase();

      const filteredCharacters = hpCharacters.filter((character) => {
          return (
              character.name.toLowerCase().includes(searchName) ||
              character.house.toLowerCase().includes(searchName)
          );
      });
      displayCharacters(filteredCharacters);
    });