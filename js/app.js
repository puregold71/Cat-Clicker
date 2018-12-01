// const names = ["Maddie", "Boots", "Athena", "Simon", "Tabby"];
// const catsName = document.querySelectorAll('li');
const container = document.querySelector('.container')
// const display = document.querySelector('.display')
const image = document.querySelector('img')
// const name = document.querySelector('.name')
const clicks = document.querySelector('.clicks')
// const pictures = ["cat.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"]
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
for(let i=0; i<kitties.length; i++) {
  let name = kitties[i].name
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
