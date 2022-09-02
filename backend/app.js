const output = document.querySelector('.resultScreen p');
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '*', '/'];

let firstNum = '';
let secondNum = '';
let sign = '';
let result = false;

document.querySelector('.eraseAll').addEventListener('click', clearAll);
document.querySelector('.buttons').addEventListener('click', pressedButton);

function clearAll() {
	firstNum = '';
	secondNum = '';
	sign = '';
	result = false;
	output.textContent = 0;
}
