const container = document.querySelector('.container')
const image = document.querySelector('img')
const clicks = document.querySelector('.clicks')
const kitties = [
  {name: "Maddie",
   image: "./img/cat.jpg",
   clicked: 0
  },
  {name: "Boots",
   image: "./img/cat2.jpg",
   clicked: 0
  },
  {name: "Athena",
   image: "./img/cat3.jpg",
   clicked: 0
  },
  {name: "Simon",
   image: "./img/cat4.jpg",
   clicked: 0
  },
  {name: "Tabby",
   image: "./img/cat5.jpg",
   clicked: 0
 }
]
//loop through kitties array
for(let i=0; i<kitties.length; i++) {
  let name = kitties[i].name
  //make a div that contains all the names
  const elem = document.createElement('div')
  elem.innerHTML = name

  elem.addEventListener('click', (function() {
  // //   return function() {
   image.src = kitties[i].image;
   name.innerHMTL = kitties[i].name;
   kitties[i].clicked++
   clicks.innerHTML = kitties[i].clicked

  //   }
})
)




  container.appendChild(elem)
}
