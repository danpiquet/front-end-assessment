let randBtn = document.querySelector('#random-rest-btn')
let restaurants = ['Chubbys','Red 8', 'Chilis','Arctic Circle']

const restAlert = (e) => {
    e.preventDefault()
    let chosen = restaurants[Math.floor(Math.random() * restaurants.length)]
    alert(chosen)
}
randBtn.addEventListener('click',restAlert)