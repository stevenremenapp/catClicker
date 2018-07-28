catImages = [
    {
        name: 'Xuxa',
        src: 'cat1.jpg'
    },
    {
        name: 'Ferdinand',
        src: 'cat2.jpg'
    }
]

// Set cat names

let catNames = [];
let catNameDisplays = document.querySelectorAll('.catName');
catNames.push(catNameDisplays);

for (let i = 0; i < catNames[0].length; i++) {
    let catNameDisplay = catNames[0][i];
    catNameDisplay.textContent = catImages[i].name;
}


// let cat1Name = document.getElementById('cat1Name');
// cat1Name.textContent = catImages[0].name;

// let cat2Name = document.getElementById('cat2Name');
// cat2Name.textContent = catImages[1].name;


let catImage = document.getElementById('catImage');
let clickCount = 0;
cat1Image.addEventListener('click', function() {
    let clickCountDisplay = document.getElementById('cat1ClickCount');
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});