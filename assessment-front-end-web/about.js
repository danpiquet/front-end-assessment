console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully')
}
const compliment = (e) => {
	e.preventDefault()
	alert('You smell really nice.') 
}


let form = document.querySelector('#contact');
let picture = document.querySelector('#duck-picture')

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover',compliment)