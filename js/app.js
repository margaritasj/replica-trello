/*jslint browser:true*/
/*global window*/
window.addEventListener("load", function (event) {
  "use strict";
  var container = document.getElementById('container');
  var addList = document.getElementById('add-list');
  var mainBoard = document.getElementById("main-board");
  var titleList = document.getElementById("title-list");
  var buttonSave = document.getElementById("save");
  event.preventDefault();

  addList.addEventListener("click", function (event) {
    event.preventDefault();
    addList.classList.add("invisible");
    mainBoard.classList.remove("invisible");
    mainBoard.classList.add("visible");
    addList.classList.remove("visible");
  });
  
  // Cuando se haga click en la ventana, #main-board vuelva a esconderse
    mainBoard.addEventListener("click", function(event) {
    if (event.target !== mainBoard && event.target !== titleList && event.target !== buttonSave) {
      mainBoard.classList.add("invisible");
      mainBoard.classList.remove("visible");
      addList.classList.add("visible");
      addList.classList.remove("invisible");
    }
  });
  
  // Function for save new list
  buttonSave.addEventListener("click", function(event) {
      var newInput;
      var myId;
      var textTitle;
      var containerTitle;
      var aNewBoard;
      var titleBoard;
      event.preventDefault();
      titleBoard = document.getElementById("title-list").value;
      // clear the input
      titleList.value = "";
      if (titleBoard !== "") {
          // A continuación se crea el nuevo elemento y su título
          aNewBoard = document.createElement("form");
          containerTitle = document.createElement("h2");
          textTitle = document.createTextNode(titleBoard);
          containerTitle.appendChild(textTitle);
          aNewBoard.appendChild(containerTitle);
          aNewBoard.classList.add("new-board");
          container.insertBefore(aNewBoard, mainBoard);
          // Determinar una ID que corresponda a la ubicación del elemento padre
          myId = document.getElementsByTagName("form").length - 1;
          aNewBoard.setAttribute("id", myId);
          // Aquí se creará el input
          newInput = document.createElement("input");
          newInput.setAttribute("placeholder", "Añadir una tarjeta...");
          aNewBoard.appendChild(newInput);

          // Y acá, las funciones del input
          newInput.addEventListener("click", function (event) {
              var textArea;
              var newButton;
              var textAddButton;
              var newCloseButton;
              var spanClose;
              event.preventDefault();
              // Que desaparezca el input. Se usa this para referirse a este elemento
              this.style.display = "none";
              textArea = document.createElement("textarea");
              aNewBoard.appendChild(textArea);
              textArea.focus();
              // The add button will be created
              textAddButton = document.createTextNode("Añadir");
              newButton = document.createElement("button");
              newButton.appendChild(textAddButton);
              newButton.classList.add("button");
              aNewBoard.appendChild(newButton);
              // Function
              newButton.addEventListener("click", function () {
                  var contentItem;
                  var containerItem;
                  event.preventDefault();
                  //
                  // If the content of the text area is empty, not create new item
                  if (textArea.value !== "") {
                      containerItem = document.createElement("p");
                      contentItem = document.createTextNode(textArea.value);
                      containerItem.classList.add("item");
                      containerItem.appendChild(contentItem);
                      aNewBoard.insertBefore(containerItem, newInput);
                      // Cleaning the text area
                      textArea.value = "";
                      textArea.focus();
                  }
              });
              // Create button close
              newCloseButton = document.createElement("button");
              spanClose = document.createElement("span");
              newCloseButton.appendChild(spanClose);
              spanClose.classList.add("icon-close");
              newCloseButton.classList.add("closing-button");
              aNewBoard.appendChild(newCloseButton);
              // Function
              newCloseButton.addEventListener("click", function () {
                  event.preventDefault();
                  aNewBoard.removeChild(textArea);
                  aNewBoard.removeChild(newButton);
                  aNewBoard.removeChild(this);
                  newInput.style.display = "inline-block";
              });
          });
      }
  });
});
