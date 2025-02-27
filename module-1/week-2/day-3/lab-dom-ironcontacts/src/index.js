// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((oneCeleb) => {
  const myRow = document.createElement("tr");
  myRow.innerHTML = `
  <td>
    <img src="${oneCeleb.pictureUrl}" />
  </td>
  <td> ${oneCeleb.name} </td>
  <td> ${oneCeleb.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(myRow);

  //this is inside the loop and after the row was appended
  //delete btn
  const theNewDeleteBtn = myRow.querySelector(".btn-delete");
  theNewDeleteBtn.addEventListener("click", () => {
    console.log("delete btn clicked");
    myRow.remove();
  });
  //inside the loop
  //the like btn
  const theLikeBtn = myRow.querySelector(".btn-like");
  theLikeBtn.addEventListener("click", () => {
    console.log("like button clicked");
    theLikeBtn.classList.toggle("selected");
  });
});

//add random contact
buttonAddRandom.addEventListener("click", () => {
  const myRandomIndex = Math.floor(Math.random() * contacts.length);
  const theRandomPersonArr = contacts.splice(myRandomIndex, 1);
  const theActualPerson = theRandomPersonArr[0];

  const myRandomRow = document.createElement("tr");
  myRandomRow.innerHTML = `
    <td>
      <img src="${theActualPerson.pictureUrl}" />
    </td>
    <td> ${theActualPerson.name} </td>
    <td> ${theActualPerson.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(myRandomRow);
});
