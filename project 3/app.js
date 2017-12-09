const btnSubmit = document.querySelector('.submit');
const message = document.querySelector('.message');
const output = document.querySelector('.output');
const btnSound = document.querySelector('.sound');

btnSubmit.addEventListener('click', function(event) {
	event.preventDefault();
	var messageText = message.value;
	if (messageText.length > 0) {
		output.className = 'output';
		output.textContent = message.value;
	} else {
		output.textContent = 'Please enter a message.';
		output.className += ' text--error';
		message.className += ' input--error shake';
		setTimeout(() => {
			message.className = 'message';
		}, 1000);
	}
});
