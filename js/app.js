
let model = {
  currentCat: null,
  cats: [
    {name: "Maddie",
     image: "https://images.unsplash.com/photo-1506539320195-ffbda4f62d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
     clicked: 0
    },
    {name: "Boots",
     image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
     clicked: 0
    },
    {name: "Athena",
     image: "https://images.unsplash.com/photo-1512427509653-96340e97ce7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
     clicked: 0
    },
    {name: "Tabby",
     image: "https://images.unsplash.com/photo-1534330980656-d201223895ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
     clicked: 0
    },
    {name: "Simon",
     image: "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
     clicked: 0
   }
  ]
};

let octopus = {
  init: function() {
    //set currentCat to first in list
    model.currentCat = model.cats[0]
   //initialize views
   catListView.init();
   catView.init()
   adminView.init()
  },
  getCurrentCat: function() {
    return model.currentCat;
  },
  getCats: function() {
    return model.cats;
  },
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },
  incrementCounter: function() {
    model.currentCat.clicked++;
    catView.render();
    adminView.render();
  }

};


 let catView = {
      init: function () {
        this.cat = document.querySelector('.cat');
        this.catName = document.querySelector('.name');
        this.catPic = document.querySelector('.cat-pic');
        this.count = document.querySelector('.count')

      //add a counter when a cat's image is clicked
      this.catPic.addEventListener('click', function() {
        octopus.incrementCounter()
      });
      this.render();

    },
    render: function() {
      let currentCat = octopus.getCurrentCat();
      this.count.innerHTML = currentCat.clicked;
      this.catName.innerHTML = currentCat.name;
      this.catPic.src = currentCat.image;

    }

  };

  let catListView = {
    init: function() {
      this.catList = document.querySelector('.cat-list')
      this.render()
    },
    render: function() {
      let cats = octopus.getCats();


      for(let i=0; i<cats.length; i++) {
        let cat = cats[i];
        let elem = document.createElement('li')
        elem.innerHTML = cat.name

       elem.addEventListener('click', function() {
           octopus.setCurrentCat(cats[i])
           catView.render()
           adminView.render()
       });
       this.catList.appendChild(elem);
     }
    }
  };

  let adminView = {
    init: function() {
      let catInfo = document.querySelector('.cat-info')
      let admin = document.querySelector('#admin');
      let cancel = document.querySelector('#cancel')
      //add listener to show admin area when clicked
      admin.addEventListener('click', function() {
        catInfo.style.visibility = "visible"
      })
      //render the admin view
      this.render();
      //add listener to close admin area when clicked
      cancel.addEventListener('click', function() {
        catInfo.style.visibility = "hidden";
      });

    },
    render: function () {
      this.catName = document.querySelector('#cat-name');
      this.clicks = document.querySelector('#cat-clicks');
      this.catUrl = document.querySelector('#cat-url');
      //populate text boxes with current values
      this.catName.value = octopus.getCurrentCat().name;
      this.clicks.value = octopus.getCurrentCat().clicked;
      this.catUrl.value = octopus.getCurrentCat().image;
      //add listner and get new values from text input
      save.addEventListener('click', function() {
        let newName = document.getElementById('cat-name').value;
        let newClick = document.getElementById('cat-clicks').value;
        let newUrl = document.getElementById('cat-url').value
        //get current cat
        let currentCat = octopus.getCurrentCat()
        //set current cat's new values
        currentCat.name = newName;
        currentCat.image = newUrl;
        currentCat.clicked = newClick;
        //render cat view to see updated info
        catView.render()


      });


    }
  }


  octopus.init()
