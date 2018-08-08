//  -------  MODEL  ------- //

let data = {
    currentCat: null,
    cats: [
        {
            name: 'Xuxa',
            src: 'img/cat1.jpg',
            alt: 'Adorable kitten with tan and brown fur staring into the camera',
            clicks: 0
        },
        {
            name: 'Ferdinand',
            src: 'img/cat2.jpg',
            alt: 'Adorable kitten with white and brown fur and blue eyes staring into the camera from behind a stairpost',
            clicks: 0
        },
        {
            name: 'Truman',
            src: 'img/cat3.jpg',
            alt: 'The head and open mouth of a black cat in the middle of a yawn revealing teeth and tongue',
            clicks: 0
        },
        {
            name: 'Suman',
            src: 'img/cat4.jpg',
            alt: 'A black and white cat laying with its arms outstretched on top of a small bench which is perched atop a beige reclining chair',
            clicks: 0
        },
        {
            name: 'Goose',
            src: 'img/cat5.jpg',
            alt: 'A fluffy tan black and white cat standing on its hind legs while a human scratches its belly',
            clicks: 0
        },
        {
            name: 'Evie',
            src: 'img/cat6.jpg',
            alt: 'A small tan brown and white cat curled around on its back with its head upside down and paws in the air while looking back at the camera ',
            clicks: 0
        }
    ]
}

//  -------  CONTROLLER & VIEW  ------- //

let methods = {

    init: function() {
        // Init cat div
        data.currentCat = data.cats[0];
        this.catDiv = document.getElementById('cat');
        this.catName = document.getElementById('catName');
        this.catImage = document.getElementById('catImage');
        this.catClickCount = document.getElementById('clickCount');

        this.catImage.addEventListener('click', function() {
            methods.incrementClickCount();
        });

        // Init cat list
        this.catList = document.getElementById('catList');

        // render the DOM according to these values
        this.render();
    },

    getCats: function() {
        return data.cats;
    },

    getCurrentCat: function() {
        return data.currentCat;
    },

    setCurrentCat: function(cat) {
        data.currentCat = cat;
    },

    incrementClickCount: function() {
        data.currentCat.clicks += 1;
        methods.render();
    },

    // Method for creating the cat nav list
    createCatNav: function() {
    
    },
    // Method for updating clickCount

    // Method for setting current cat and displaying the cat

    // Render the view
    render: function() {
        // Render the cat div
        let currentCat = this.getCurrentCat();
        this.catName.textContent = currentCat.name;
        this.catImage.src = currentCat.src;
        this.catClickCount.textContent = currentCat.clicks;

        // Render the cat list
        let cat, listItem, i;

        let cats = methods.getCats();
        //console.log(cats);

        this.catList.innerHTML = '';

        for (i = 0; i < cats.length; i++) {
            cat = cats[i];
            listItem = document.createElement('li');
            listItem.textContent = cat.name;

            listItem.addEventListener('click', (function(catCopy) {
                return function() {
                    methods.setCurrentCat(catCopy);
                    methods.render();
                };
            })(cat));
            this.catList.appendChild(listItem);
        }

        
    }
};

// Launch Cat Clicker!
methods.init();





/*

// Global Selectors
let catClicker = document.querySelector('.catClicker');

// Create a ul element with class of nav
let catListUl = document.createElement('UL');
catListUl.setAttribute('class', 'nav');


// Create as many li elements as there are cats in the object
for (const catNum in cats) {
    let catNameListOption = document.createElement('LI');
    catNameListOption.textContent = cats[catNum].name;
    catNameListOption.setAttribute('data-cat', catNum);
    catListUl.appendChild(catNameListOption);
    document.body.insertBefore(catListUl, catClicker);
}


// Set event listener on the nav list
let catListNav = document.querySelector('.nav');
catListNav.addEventListener('click', function(event) {
    let catDivs = document.querySelectorAll('.cat');
    let selectedCatName = event.target;
    let selectedCatId = selectedCatName.dataset.cat;
    
    // If list item is clicked and there are catDivs created/existing, then clear them
    if (selectedCatName.tagName === 'LI' && catDivs) {
        for (let i = 0; i < catDivs.length; i++) {
            catDivs[i].classList.add('hidden');
        }
    }
    // If list item is clicked and has not already been created, then create it
    if ((selectedCatName.tagName === 'LI') && (!(selectedCatName.classList.contains('created')))) {
        selectedCatName.setAttribute('class', 'created');
        
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
        // Add span to display clickCount
        clickDisplay = document.createElement('span');
        clickDisplay.setAttribute('class', 'currentClicks');
        clickDisplay.textContent = '0';
        // Add items to DOM in catClicker div
        catClicker.appendChild(newCatDiv).appendChild(displayCatName);
        newCatDiv.appendChild(catImage);
        newCatDiv.appendChild(catClickCountTitle);
        newCatDiv.appendChild(clickDisplay);
    // If list item is clicked and has already been created
    } else if ((selectedCatName.tagName === 'LI') && (selectedCatName.classList.contains('created'))) {
        // Hide all catDivs
        for (let i = 0; i < catDivs.length; i++) {
            catDivs[i].classList.add('hidden');
            console.log(selectedCatId);
            console.log(catDivs[i].dataset.cat);
            // Reveal catDiv that matches the list item clicked
            if (selectedCatId === catDivs[i].dataset.cat) {
                catDivs[i].classList.remove('hidden');
            }
        }
    }
});

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
        let currentClickDisplay = catDivClicked.querySelector('.currentClicks');
        currentClickDisplay.textContent = cats[catClickedId].clicks;           
    }
});

*/