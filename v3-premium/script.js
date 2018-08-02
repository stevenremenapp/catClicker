cats = {
    1: {
        name: 'Xuxa',
        src: 'img/cat1.jpg',
        alt: 'Adorable kitten with tan and brown fur staring into the camera',
        clicks: 0
    },
    2: {
        name: 'Ferdinand',
        src: 'img/cat2.jpg',
        alt: 'Adorable kitten with white and brown fur and blue eyes staring into the camera from behind a stairpost',
        clicks: 0
    },
    3: {
        name: 'Truman',
        src: 'img/cat3.jpg',
        alt: 'The head and open mouth of a black cat in the middle of a yawn revealing teeth and tongue',
        clicks: 0
    },
    4: {
        name: 'Suman',
        src: 'img/cat4.jpg',
        alt: 'A black and white cat laying with its arms outstretched on top of a small bench which is perched atop a beige reclining chair',
        clicks: 0
    },
    5: {
        name: 'Goose',
        src: 'img/cat5.jpg',
        alt: 'A fluffy tan black and white cat standing on its hind legs while a human scratches its belly',
        clicks: 0
    },
    6: {
        name: 'Evie',
        src: 'img/cat6.jpg',
        alt: 'A small tan brown and white cat curled around on its back with its head upside down and paws in the air while looking back at the camera ',
        clicks: 0
    }
}

// Global Selectors

let catClicker = document.querySelector('.catClicker');
let catDivs = document.querySelectorAll('.cat');
console.log(catDivs);

// Toggle cat div

// let cat1 = document.querySelector('ul > li');
// cat1.addEventListener('click', function() {
//     for (let i = 0; i < catDivs.length; i++) {
//         catDivs[i].classList.toggle('goAway');
//     }    
// });


// PSEUDO CODE TO CREATE NAV LIST OF CAT NAMES

// Create a ul element with class of nav
let catListUl = document.createElement('UL');
catListUl.setAttribute('class', 'nav');

// Create as many li elements as there are cats in the object
for (const catNum in cats) {
    // console.log(cats[catNum]);
    let catNameListOption = document.createElement('LI');
    catNameListOption.textContent = cats[catNum].name;
    catNameListOption.setAttribute('data-cat', catNum);
    catListUl.appendChild(catNameListOption);
    document.body.insertBefore(catListUl, catClicker);
}


// PSEUDO CODE TO CREATE A CAT DIV

// Set event listener on the nav list

let catListNav = document.querySelector('.nav');
catListNav.addEventListener('click', function(event) {
    let selectedCatName = event.target;
    if (selectedCatName.tagName === 'LI') {
        let selectedCatId = selectedCatName.dataset.cat;
        console.log(selectedCatId);
        // Create div with class of cat and correct data-cat attribute
        let newCatDiv = document.createElement('div');
        newCatDiv.setAttribute('class', 'cat');
        newCatDiv.setAttribute('data-cat', selectedCatId);
        // Add p tag with the cat name as text
        let displayCatName = document.createElement('p');
        displayCatName.textContent = selectedCatName.textContent;
        // Add image with correct src and alt caption
        let catImage = document.createElement('img');
        catImage.setAttribute('src', cats[selectedCatId].src);
        catImage.setAttribute('alt', cats[selectedCatId].alt);
        // Add span with text 'Number of cat clicks: '
        let catClickCountTitle = document.createElement('span');
        catClickCountTitle.textContent = 'Number of cat clicks: ';
        // Add items to DOM in catClicker div
        catClicker.appendChild(newCatDiv).appendChild(displayCatName);
        newCatDiv.appendChild(catImage);
        newCatDiv.appendChild(catClickCountTitle);
    }
});


// PSEUDO CODE TO HIDE & SHOW DIVS AS CLICKS OCCUR


// Page starts with empty catClicker div
// First click adds cat div to the DOM and displays it
// If user clicks on the same name then nothing changes
// If user clicks on a different cat name then the current cat div is hidden (add css class) and the corresponding clicked cat div is created and added to the DOM (and so on and so on)
// If user clicks on yet another cat name the currently displayed cat div is hidden and the clicked cat div is display or created and then displayed



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
    }
});