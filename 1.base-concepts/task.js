"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant > 0) {
		let solutionFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
		let solutionSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(solutionFirst, solutionSecond);
	} else if (discriminant === 0) {
		let solution = -b / (2 * a);
		arr.push(solution);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentPerMonths = (percent / 100) / 12;
	let creditBody = amount - contribution;
	let monthPay = creditBody * (percentPerMonths + (percentPerMonths / (((1 + percentPerMonths) ** countMonths) - 1)));

	return Number((countMonths * monthPay).toFixed(2));
}