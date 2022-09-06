
let painter = document.querySelector(".colorChoice").value
let paintAll = document.querySelector(".paintAll")


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









//for loop using the box div on background;
//get element by tag or class name use repeat on it
//background-repeat: repeat; background-color: white;
//border
//height
//width
//