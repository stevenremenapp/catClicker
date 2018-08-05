/* ======= Model ======= */

let model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Tabby',
            imgSrc: 'img/cat1.jpg',
            imgAttribution: 'Someone else'
        },
        {
            clickCount: 0,
            name: 'Tiger',
            imgSrc: 'img/cat2.jpg',
            imgAttribution: 'someone else'
        },
        {
            clickCount: 0,
            name: 'Truman',
            imgSrc: 'img/cat3.jpg',
            imgAttribution: 'me!'
        },
        {
            clickCount: 0,
            name: 'Suman',
            imgSrc: 'img/cat4.jpg',
            imgAttribution: 'me!'
        },
        {
            clickCount: 0,
            name: 'Goose',
            imgSrc: 'img/cat5.jpg',
            imgAttribution: 'me!'
        },
        {
            clickCount: 0,
            name: 'Evie',
            imgSrc: 'img/cat6.jpg',
            imgAttribution: 'me!'
        }
    ]
};

/* ======= Controller ======= */

let controller = {
    init: function() {
        // set our current cat to the first one on the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increment the counter for the currently selected cat
    incrementCounter: function() {
        model.currentCat.clickCount += 1;
        catView.render();
    }
};


/* ======= View ======= */

let catView = {
    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function() {
            controller.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        let currentCat = controller.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

let catListView = {
    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        let cat, elem, i;
        // get the cats we'll be rendering from the controller
        let cats = controller.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, set CurrentCat and render the catView
            // (this uses our closure in a loop trick to connect the value of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    controller.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
controller.init();