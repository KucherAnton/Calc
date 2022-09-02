const output = document.querySelector('.resultScreen p');
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '*', '/', '%'];

let firstNum = '';
let secondNum = '';
let sign = '';
let equal = false;

document.querySelector('.eraseAll').addEventListener('click', clearAll);
document.querySelector('.buttons').addEventListener('click', pressedButton);

function clearAll() {
	firstNum = '';
	secondNum = '';
	sign = '';
	result = false;
	output.textContent = 0;
}

function pressedButton(event) {
	const key = event.target.textContent;

	output.textContent = '';

	if (!event.target.classList.contains('btn')) return;
	if (event.target.classList.contains('eraseAll')) return;

	if (digit.includes(key)) {
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

	if (action.includes(key)) {
		sign = key;
		output.textContent = key;
		console.log(key);
		return;
	}

	if (key == '=') {
		switch (sign) {
			case '+':
				firstNum = +firstNum + +secondNum;
				break;
			case '-':
				firstNum = firstNum - secondNum;
				break;
			case '*':
				firstNum = firstNum * secondNum;
				break;
			case '/':
				firstNum = firstNum / secondNum;
				break;
			case '%':
		}
		equal = true;
		output.textContent = firstNum;
	}
}
