'use strict';
document.addEventListener('DOMContentLoaded', function(){
  console.log(localStorage.index);
  if(localStorage.index == null){
    localStorage.setItem('index', 0);
    localStorage.setItem('mem');
    localStorage.mem = [];
  }
  var i = localStorage.index;
  function Memory(title, text, image){
    console.log('creating new event at index: ' + i);
    this.title = title;
    this.text = text;
    this.image = image;
  };
  function makeMemory(title, text, image){
    var parentEl = document.getElementById('upload');
    var titleEl = document.createElement('h1');
    titleEl.setAttribute('id', 'title' + i);
    titleEl.textContent = text;
    parentEl.appendChild(titleEl);
    var divEl = document.createElement('div');
    divEl.setAttribute('id', 'memory' + i);
    parentEl.appendChild(divEl);
    var imageEl = document.createElement('img');
    imageEl.setAttribute('id', 'image' + i);
    imageEl.setAttribute('src', image);
    var textEl = document.createElement('p');
    textEl.setAttribute('id', 'text' + i);
    textEl.textContent = text;
  }
  var formEl = document.getElementById('input');
  var handleInput = function(event){
    var tempArray = localStorage.mem;
    console.log(tempArray);
    event.preventDefault();
    event.stopPropagation();
    var title = event.target.title.value;
    var text = event.target.text.value;
    var image = event.target.image.value;
    tempArray.push(new Memory(title, text, image));
    localStorage.mem = tempArray;
    makeMemory(title, text, iamge);
  };
  formEl.addEventListener('submit', handleInput, false);
});
