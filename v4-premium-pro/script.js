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

        // Init admin div
        this.adminDiv = document.getElementById('adminDiv');
        this.adminCatName = document.getElementById('adminCatName');
        this.adminSrc = document.getElementById('adminSrc');
        this.adminNumClicks = document.getElementById('adminNumClicks');

        this.adminBtn = document.getElementById('adminBtn');
        this.adminBtn.addEventListener('click', function() {
            methods.adminDiv.classList.remove('hidden');
        });

        // Init cancel button
        this.cancelBtn = document.getElementById('cancelBtn');
        this.cancelBtn.addEventListener('click', function() {
            methods.adminDiv.classList.add('hidden');
        });

        // Init save button
        this.saveBtn = document.getElementById('saveBtn');
        this.saveBtn.addEventListener('click', function() {
            methods.updateCatInfo();
            methods.adminDiv.classList.add('hidden');
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

    updateCatInfo: function() {
        let currentCat = this.getCurrentCat();
        currentCat.name = this.adminCatName.value;
        currentCat.src = this.adminSrc.value;
        currentCat.clicks = this.adminNumClicks.value;
        methods.render();
    },

    // Render the view
    render: function() {
        // Render the cat div
        let currentCat = this.getCurrentCat();
        this.catName.textContent = currentCat.name;
        this.catImage.src = currentCat.src;
        this.catClickCount.textContent = currentCat.clicks;

        // Render the admin div
        this.adminCatName.value = currentCat.name;
        this.adminSrc.value = currentCat.src;
        this.adminNumClicks.value = currentCat.clicks;

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