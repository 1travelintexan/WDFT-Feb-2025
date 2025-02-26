const bodyElement = document.querySelector("body");
bodyElement.style.color = "red";
const h1Element = document.getElementById("heading");
h1Element.style.color = "green";
const pElement = document.querySelector("p");
const inputElement = document.getElementById("pet-name-input");
const addPetBtnElement = document.getElementById("pet-name-btn");
const petListElement = document.getElementById("pet-list");
let showUglyPage = true;

const buttonElement = document.querySelector("#hide-btn");
//here is where we make the button 'clickable'
buttonElement.addEventListener("click", () => {
  //   bodyElement.style.backgroundColor = "rgb(60, 85, 85)";
  //hiding the the p tag with the display property
  pElement.style.display = "none";
  //add a class to h1Element with the classList
  //   h1Element.classList.add("our-cool-class");
  //toggle a class
  h1Element.classList.toggle("our-cool-class");
});

addPetBtnElement.addEventListener("click", () => {
  //petName is the value of what was typed in the input
  const petName = inputElement.value;
  //newLiElement is a created list element that will be added to the unordered list
  const newLiElement = document.createElement("li");
  //the delete button will be added to each li before the li is added to the unordered list
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  //we set the innerText of the li to have the petName variable
  newLiElement.innerText = petName;
  //afterward we add the delete button to the li
  newLiElement.appendChild(deleteBtn);
  //finally we add the li to the list on the html
  petListElement.appendChild(newLiElement);

  //after we add the li to the list, we add an eventListener to the delete button
  deleteBtn.addEventListener("click", () => {
    console.log("delete button clicked");
    newLiElement.remove();
  });
  //this is just nice user experience to clear the form
  inputElement.value = "";
});

// target the pages and put in variables here
const uglyElement = document.getElementById("ugly-page");
const prettyPageElement = document.getElementById("pretty-page");
const hideUglyPageBtn = document.getElementById("hide-ugly-page");
prettyPageElement.style.display = "none";
// create an image and add the src to it
const ironhackImage = document.createElement("img");
// ironhackImage.setAttribute("src", "./images/ironhackLogo.PNG");
ironhackImage.src = "./images/ironhackLogo.PNG";
ironhackImage.setAttribute("alt", "ironhack logo");
prettyPageElement.appendChild(ironhackImage);
//add a click event listener to the ugly button
hideUglyPageBtn.addEventListener("click", () => {
  console.log("ugly button id: ", hideUglyPageBtn);
  if (showUglyPage) {
    uglyElement.style.display = "none";
    prettyPageElement.style.display = "block";
    showUglyPage = false;
  } else {
    uglyElement.style.display = "block";
    prettyPageElement.style.display = "none";
    showUglyPage = true;
  }
});
