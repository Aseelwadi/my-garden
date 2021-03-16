'use strict'
let formEl = document.getElementById('flowerForm');
formEl.addEventListener("submit", submitHandel);
let tableEl = document.getElementById('flowerTable');
let clear = document.getElementById('clear');



//constructor
var floweArray = [];

function flowers(category, name, season) {
    this.name = name;
    this.category = `./img/${category}.jpeg`;
    this.season = season;
    floweArray.push(this);
}
//functions

function submitHandel(event) {
    event.preventDefault();
    var category = event.target.category.value;
    var name = event.target.name.value;
    var season = event.target.season.value;

    var obj = new flowers(category, name, season);
    localStorage.setItem('flower', JSON.stringify(floweArray));
    obj.renderFlowers();
}
flowers.prototype.renderFlowers = function() {

    var row = document.createElement('tr');

    var categoryTd = document.createElement('td');
    var imag = document.createElement('img');
    imag.setAttribute("src", this.category);
    imag.setAttribute('style', 'width:55px;padding-top:10px;');
    categoryTd.appendChild(imag);
    row.appendChild(categoryTd);

    // categoryTd.textContent = ''; 
    var nameTd = document.createElement('td');
    nameTd.textContent = this.name;
    var seasonTd = document.createElement('td');
    seasonTd.textContent = this.season;

    row.appendChild(nameTd);
    //row.appendChild(categoryTd);
    row.appendChild(seasonTd);

    tableEl.appendChild(row);


}

function checkLocal() {
    if (localStorage.getItem('flower')) {
        floweArray = JSON.parse(localStorage.getItem('flower'));
        reRender();
    }
}

function reRender() {

    for (let i = 0; i < floweArray.length; i++) {

        var row = document.createElement('tr');

        var categoryTd = document.createElement('td');
        //categoryTd.textContent = '';
        var imag = document.createElement('img');
        imag.setAttribute("src", floweArray[i].category);
        imag.setAttribute('style', 'width:55px;padding-top:10px;');
        categoryTd.appendChild(imag);
        row.appendChild(categoryTd);
        var nameTd = document.createElement('td');
        nameTd.textContent = floweArray[i].name;

        var seasonTd = document.createElement('td');
        seasonTd.textContent = floweArray[i].season;

        row.appendChild(nameTd);

        row.appendChild(seasonTd);

        tableEl.appendChild(row);

    }
}

// function handleClear() {
//     localStorage.removeItem();
//     checkLocal();
//     location.reload();
// }

//invoke
checkLocal();
//clear.addEventListener("click", handlClear);