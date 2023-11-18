function getArrayParams(...arr) {
	return {
		min: Math.min(...arr),
		max: Math.max(...arr),
		avg: Number((arr.reduce((accumulator, currentValue) => {
			return accumulator + currentValue
		}) / arr.length).toFixed(2))
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return arr.reduce((accumulator, currentValue) => {
		return accumulator + currentValue
	});
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i]
		} else {
			sumOddElement += arr[i]
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	const funcResult = [];

	for (let i = 0; i < arrOfArr.length; i++) {
		let funcWork = func(...arrOfArr[i]);
		funcResult.push(funcWork);
		maxWorkerResult = Math.max(...funcResult);
	}

	return maxWorkerResult;
}
