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

// Global Selectors

let catClicker = document.querySelector('.catClicker');
let catDivs = document.querySelectorAll('.cat');
console.log(catDivs);

// Set cat names

for (let i = 0; i < catDivs.length; i++) {
    let catName = document.createElement('p');
    catName.setAttribute('class', 'catName');
    catDivs[i].prepend(catName);
    let catId = catDivs[i].dataset.cat;
    catName.textContent = cats[catId].name;    
}


// Set event listener to count clicks on images

catClicker.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        console.log(event.target);
        let catClickedId = event.target.parentNode.dataset.cat;
        console.log(catClickedId);
        let catDivClicked = event.target.parentNode;
        // let catScore = cats[catClickedId].clicks;
        // catScore += 1;
        cats[catClickedId].clicks += 1;
        console.log(cats[catClickedId].clicks);

            if (catDivClicked.classList.contains('scoreAdded')) {
                let currentClickDisplay = catDivClicked.querySelector('.currentClicks');
                console.log(currentClickDisplay);
                currentClickDisplay.textContent = cats[catClickedId].clicks;
            } else {
                let newClickDisplay = document.createElement('span');
                // newClickDisplay.innerHTML = "Number of cat clicks: <span class = 'currentClicks'></span>";
                newClickDisplay.setAttribute('class', 'currentClicks');
                catDivClicked.appendChild(newClickDisplay);
                newClickDisplay.textContent = cats[catClickedId].clicks;
                catDivClicked.classList.add('scoreAdded');
            }            
        // }
    }
});