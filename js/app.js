
const name = ["Maddie", "Boots"]
const catNames = document.querySelectorAll('.name')
const cats = document.querySelectorAll('.cat');
let clicks = document.querySelectorAll('.clicks')

 for(let i=0; i<catNames.length; i++){
   catNames[i].innerHTML = name[i]
 }

for(let i=0; i<cats.length; i++){
  cats[i].addEventListener('click', function() {
    clicks[i].innerHTML++
})

}
