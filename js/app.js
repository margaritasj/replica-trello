window.addEventListener("load", function () {  
  var container = document.getElementById('container');
  var addListBtn = document.getElementById('add-a-list-btn');
  var saveListBox = document.getElementById('save-list-box');
  var listInputBox = document.getElementById('list-input-box');
  var saveListBtn = document.getElementById('save-list-btn');
  var textValue;
  var data = { lists: [] };

  addListBtn.addEventListener("click", function (event) {
    saveListBox.style.display = "inline-block";
    addListBtn.style.display = "none";
  });
  
  saveListBtn.addEventListener("click", function (event) {
    textValue = listInputBox.value;
    if (textValue) {
      var parentDiv = document.createElement("div");
      var listTitle = document.createElement("div");
      var title = document.createElement("div");
      var dotIcon = document.createElement("a");
      var newTextNode = document.createTextNode(textValue);
      var addCardLink = document.createElement("a");
      var addText = document.createTextNode("Añadir una tarea...");
      var saveButton = document.createElement('button');
      var lists;
      
      data.lists.push( {title: textValue, cards: []} );
      lists = data.lists.map(function (event) {
        return event;
      });
      for (var i = 0; i < lists.length; i++) {
        parentDiv.setAttribute("class", "add-card-container");
        parentDiv.setAttribute("id", "list-container" + i);
        dotIcon.setAttribute("class", "fa fa-ellipsis-h circle");
        dotIcon.setAttribute("id", "del" + i);
        title.setAttribute("contenteditable", "true");
        title.setAttribute("class", "text");
        title.appendChild(newTextNode);
        listTitle.appendChild(dotIcon);
        listTitle.setAttribute("class", "list-title");
        listTitle.appendChild(title);
        addCardLink.setAttribute("href", "#");
        addCardLink.setAttribute("class", "add-card");
        addCardLink.setAttribute("id", "add" + i);
        addCardLink.appendChild(addText);
        parentDiv.style.cssFloat = "left";
        parentDiv.style.display = "inline-block";
        parentDiv.appendChild(listTitle);
        parentDiv.appendChild(addCardLink);
        container.insertBefore(parentDiv, addListBtn);
        addListBtn.style.display = "inline-block";
        saveListBox.style.display = "none";
        listInputBox.value = "";
        saveButton.setAttribute('type', 'submit');
        saveButton.setAttribute('class', 'button-insert-list');
        saveButton.setAttribute('value', 'Añadir');
        saveButton.textContent = 'Añadir';
        addCardLink.appendChild(saveButton);
   
      }

    }

    
    });


});

