/*function load(grid) {
    let body = document.getElementsByTagName('grid');
    let tile = document.createElement('div');
    tile.style.cssFloat = 'left';
    document.body.appendChild(tile);

   

    
}

for (let i = 0; i < 81; i++) {
    if (i % 2 !== 0) {
        load('red');
    } else if ( i % 2 === 0) {
        load('black')
    }
}*/

let painter = document.querySelector(".colorChoice").value
let paintAll = document.querySelector(".paintAll")

//gridMaker.addEventListener("click", coloring)
let gridLoop = document.querySelector('.grid')

function load(size) {

    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixels')
        gridLoop.appendChild(pixel) 
        pixel.addEventListener("click", () => {pixel.style.backgroundColor = painter})
        paintAll.addEventListener("click", () => {pixel.style.backgroundColor = paintAll})
    }  
    
}
load(32.01)
//var first = document.getElementById('first');
//first.addEventListener('touchstart', do_something, false);
//first.addEventListener('click', do_something, false)








//for loop using the box div on background;
//get element by tag or class name use repeat on it
//background-repeat: repeat; background-color: white;
//border
//height
//width
//