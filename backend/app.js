const output = document.querySelector('.resultScreen p');
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '*', '/', '%'];

let firstNum = '';
let secondNum = '';
let sign = '';
let equal = false;

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
	console.log(firstNum);
	output.textContent = '0';

	if (digit.includes(key)) {
		if (secondNum == '' && sign == '') {
			firstNum += key;
			output.textContent = firstNum;
			console.log(firstNum);
		} else if (firstNum != '' && secondNum != '' && equal) {
			secondNum = key;
			equal = false;
			console.log(firstNum);
			output.textContent = secondNum;
		} else {
			secondNum += key;
			output.textContent = secondNum;
			console.log(firstNum);
		}
		return;
	}

	if (action.includes(key)) {
		sign = key;
		output.textContent = firstNum + key;
		return;
		console.log(firstNum);
	}

	if (key == '=') {
		if (secondNum == '') secondNum = firstNum;

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
				if (secondNum == '0') {
					output.textContent = 'Error';

					firstNum = '';
					secondNum = '';
					sign = '';
				}
				firstNum = firstNum / secondNum;
				break;
			case '%':
		}
		console.log(firstNum);
		equal = true;
		output.textContent = firstNum;
	}
}
