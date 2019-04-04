// Exmainig document properties and methods 
//console.dir(document)
document.URL;
document.domain;
console.log(document.body);
document.title.innerHTML='Yes';

let items = document.getElementsByClassName('list-group-item');
console.log(items);
for (const item of items) {
            item.style.backgroundColor = '';
}

var ItemList = document.querySelector('#main');
console.log(ItemList.nextElementSibling);
console.log(ItemList.parentNode.style.backgroundColor = 'white');

var ListMember = document.querySelectorAll('.list-group-item');
console.log(ListMember.length);

var List = document.querySelector('.list-group');

let newDiv  = document.createElement('div');
newDiv.className = 'container';
newDiv.setAttribute('title','Hell-Yeah');

let newDivText = document.createTextNode('What the hell the that!');
newDiv.append(newDivText);
console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('#header-title');
console.log(container)
container.insertBefore(newDiv,h1);

var button = document.querySelector('#button');
button.addEventListener('click',ButtonClick);


function ButtonClick(e){
    console.log('shit');
    console.log(e.clientX);
    console.log(e.type);
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    
};

var playArea = document.querySelector('#playground-area').addEventListener('mousemove',PlayArea);
var directionx = document.querySelector('#directionx');
var directiony= document.querySelector('#directiony');
var mainContainer = document.querySelector('#main-cont');

function PlayArea(e){
    directionx.innerHTML = `<h3> X-axis: ${e.clientX} </h3>`;
    directiony.innerHTML = `<h3> Y-axis: ${e.clientY} </h3>`;
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 250)";
    mainContainer.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}

var input = document.querySelector('#inputField').addEventListener('keyup',keyDown);
function keyDown(e){
    console.log(e.target.value);
}




