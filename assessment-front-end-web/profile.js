let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')
let favColor = 'Burnt Orange'
let favPlace = 'Anywhere with people I love'
let favRitual = 'Early morning exercise'

const colorClick = (e) => {
    e.preventDefault()
    alert(favColor)
}
const placeClick = (e) => {
    e.preventDefault()
    alert(favPlace)
}
const ritualClick = (e) => {
    e.preventDefault()
    alert(favRitual)
}

color.addEventListener('click',colorClick)
place.addEventListener('click',placeClick)
ritual.addEventListener('click',ritualClick)