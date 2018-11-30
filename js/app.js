const cat = document.querySelector('.cat');
let clicks = document.querySelector('.clicks')

cat.addEventListener('click', function() {
  clicks.innerHTML++
})
