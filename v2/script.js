cats = {
    1: {
        name: 'Xuxa',
        src: 'cat1.jpg',
        clicks: 0
    },
    2: {
        name: 'Ferdinand',
        src: 'cat2.jpg',
        clicks: 0
    }
}

// Set cat names

let catDivs = document.querySelectorAll('.cat');
console.log(catDivs);

for (let i = 0; i < catDivs.length; i++) {
    let catName = document.createElement('p');
    catName.setAttribute('class', 'catName');
    catDivs[i].prepend(catName);
    // catName.textContent = cats[i].name;
    // for (j = 0; j < cats.length; j++) {
    //     catName.textContent = cats[i][j].name;
    // }
    
}


// Set event listener to count clicks on images

let catClicker = document.querySelector('.catClicker');

catClicker.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        console.log(event.target);
        let catClicked = event.target.dataset.cat;
        console.log(catClicked);
        let catDivClicked = event.target.parentNode;
        // let catScore = cats[catClicked].clicks;
        // catScore += 1;
        cats[catClicked].clicks += 1;
        console.log(cats[catClicked].clicks);

            if (catDivClicked.classList.contains('scoreAdded')) {
                let currentClickDisplay = catDivClicked.querySelector('.currentClicks');
                console.log(currentClickDisplay);
                currentClickDisplay.textContent = cats[catClicked].clicks;
            } else {
                let newClickDisplay = document.createElement('span');
                // newClickDisplay.innerHTML = "Number of cat clicks: <span class = 'currentClicks'></span>";
                newClickDisplay.setAttribute('class', 'currentClicks');
                catDivClicked.appendChild(newClickDisplay);
                newClickDisplay.textContent = cats[catClicked].clicks;
                catDivClicked.classList.add('scoreAdded');
            }            
        // }
    }
});


// let cat1Image = document.getElementById('cat1Image');
// let clickCount = 0;

// cat1Image.addEventListener('click', function() {
//     let clickCountDisplay = document.getElementById('cat1ClickCount');
//     clickCount++;
//     clickCountDisplay.textContent = clickCount;
// });