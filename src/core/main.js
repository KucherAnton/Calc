import { actions, digits } from './constants/calculator.js';

let firstNum = '';
let secondNum = '';
let sign = '';
let equal = false;

const output = document.querySelector('.resultScreen p');

document.querySelector('.plusMinus').addEventListener('click', signChange);
document.querySelector('.eraseAll').addEventListener('click', clearAll);

document
	.querySelectorAll('.btn')
	.forEach((el) => el.addEventListener('click', pressedButton));

function clearAll() {
	firstNum = '';
	secondNum = '';
	sign = '';
	equal = false;
	output.textContent = 0;
}

function pressedButton(event) {
	const key = event.target.textContent;

	const isDigitChosen = digits.includes(key);
	const isActionChosen = actions.includes(key);
	const isEqualsSignChosen = key == '=';

	if (isDigitChosen) {
		if (secondNum == '' && sign == '') {
			firstNum += key;
			output.textContent = firstNum;
		} else if (firstNum != '' && secondNum != '' && equal) {
			secondNum = key;
			equal = false;
			output.textContent = secondNum;
		} else {
			secondNum += key;
			output.textContent = secondNum;
		}
		return;
	}

	if (isActionChosen) {
		sign = key;
		output.textContent = firstNum + key;
		return;
	}

	if (isEqualsSignChosen) {
		if (secondNum == '') secondNum = firstNum;

		try {
			const result = calculate(sign);

			firstNum = result;
			output.textContent = result;
		} catch (error) {
			output.textContent = error.message;
			firstNum = '';
			secondNum = '';
			sign = '';
		}

		equal = true;
	}
}

function calculate(sign) {
	switch (sign) {
		case '+':
			return +firstNum + +secondNum;
		case '-':
			return (firstNum - secondNum).toFixed(1);
		case '*':
			return firstNum * secondNum;
		case '/':
			if (secondNum == '0') {
				throw new Error('Cannot devide on zero!');
			}
			return (firstNum / secondNum).toFixed(3);

		case '%':
			return ((firstNum / 100) * secondNum).toFixed(3);
	}
}

function signChange() {
	firstNum *= -1;
	output.textContent = firstNum;
}
