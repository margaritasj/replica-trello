window.addEventListener("load", function () {  
  var container = document.getElementById('container');
  var addListBtn = document.getElementById('add-a-list-btn');
  var saveListBox = document.getElementById('save-list-box');
  var listInputBox = document.getElementById('list-input-box');
  var saveListBtn = document.getElementById('save-list-btn');



  
  addListBtn.addEventListener("click", function (event) {
    saveListBox.style.display = "inline-block";
    addListBtn.style.display = "none";
  });

});


