const NATIVE_COLORS = ["red", 'gray', 'wheat', 'white', "red", 'blue', 'green', "orange"];
const HEX_COLORS = ['#594f4f', '#547980', "#e5fcc2", "#9de0ad", "#45ada8"];

let changer = document.querySelector('.changer');
let bg = document.querySelector('.container');
let colorName = document.querySelector('.color-name');

changer.addEventListener('click', () => {
    let value = HEX_COLORS[Math.floor(Math.random() * HEX_COLORS.length)];
    document.body.style.backgroundColor = value;
    colorName.innerText = value;
});