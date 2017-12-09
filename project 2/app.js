const btnSubmit = document.querySelector('.submit');
const message = document.querySelector('.message');
const output = document.querySelector('.output');

btnSubmit.addEventListener('click', function(event) {
	event.preventDefault();
	if (output.textContent.length > 0) {
		output.textContent = message.value;
	} else {
		output.textContent = 'Please enter a message.';
	}
});