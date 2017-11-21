window.addEventListener("load", function (event) {  
  var container = document.getElementById('container');
  var addList = document.getElementById('add-list');
  var mainBoard = document.getElementById("main-board");
  var titleList = document.getElementById("title-list");
  var buttonSave = document.getElementById("save");
  var buttonClose = document.getElementById("close");
  var toDoList = document.getElementById("todo-list");
  var buttonAdd = document.getElementById("add");

  addList.addEventListener("click", function (event) {
    addList.classList.add("invisible");
    mainBoard.classList.remove("invisible");
    mainBoard.classList.add("visible");
    addList.classList.remove("visible");
  });
  
  // Para que cuando se haga click en la ventana, #main-board vuelva a esconderse
  mainBoard.addEventListener("mouseup", function(event) {
    if (event.target !== mainBoard && event.target !== titleList && event.target !== buttonSave) {
      mainBoard.classList.add("invisible");
      mainBoard.classList.remove("visible");
      addList.classList.add("visible");
      addList.classList.remove("invisible");
    }
  });
  
  // Función para guardar una nueva lista
  buttonSave.addEventListener("click", function(event) {
    event.preventDefault();
    var titleBoard = document.getElementById("title-list").value;
    // Limpiar el input
    titleList.value = "";        
    if (titleBoard !== "") {
      // A continuación se crea el nuevo elemento y su título
      var aNewBoard = document.createElement("form");
      var containerTitle = document.createElement("h2");
      var textTitle = document.createTextNode(titleBoard);
      containerTitle.appendChild(textTitle);
      aNewBoard.appendChild(containerTitle);
      aNewBoard.classList.add("new-board");
      container.insertBefore(aNewBoard, mainBoard);
      // Determinar una ID que corresponda a la ubicación del elemento padre
      var myId = document.getElementsByTagName("form").length - 1;
      aNewBoard.setAttribute("id", myId);
      // Aquí se creará el input
      var newInput = document.createElement("input");
      newInput.setAttribute("placeholder", "Añadir una tarjeta...");
      aNewBoard.appendChild(newInput);
      
      // Y acá, las funciones del input
      newInput.addEventListener("click", function(event) {
        event.preventDefault();
        // Que desaparezca el input. Se usa this para referirse a este elemento
        this.style.display = "none";
        var textArea = document.createElement("textarea");
        aNewBoard.appendChild(textArea);
        textArea.focus();
        // Aquí se creará el botón de añadir
        var textAddButton = document.createTextNode("Añadir");
        var newButton = document.createElement("button");
        newButton.appendChild(textAddButton);
        newButton.classList.add("button");
        aNewBoard.appendChild(newButton);
        // Y aquí su función
        newButton.addEventListener("click", function() {
          event.preventDefault();
          // Si el contenido del área de texto está vacío, no se creará un nuevo item
          if (textArea.value !== "") {
            var containerItem = document.createElement("p");
            var contentItem = document.createTextNode(textArea.value);
            containerItem.classList.add("item");
            containerItem.appendChild(contentItem);
            aNewBoard.insertBefore(containerItem, newInput);
            // Limpiando el área de texto
            textArea.value = "";
            textArea.focus();
          }
        });
        // Aquí se creará el botón de cerrar
        var newCloseButton = document.createElement("button");
        var spanClose = document.createElement("span");
        newCloseButton.appendChild(spanClose);
        spanClose.classList.add("icon-close");
        newCloseButton.classList.add("closing-button");
        aNewBoard.appendChild(newCloseButton);
        // Y aquí su función
        newCloseButton.addEventListener("click", function() {
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




