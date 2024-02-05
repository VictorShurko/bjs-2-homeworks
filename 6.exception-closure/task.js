function parseCount(num) {
	const parseResult = Number.parseFloat(num);
	if (isNaN(parseResult)) {
		throw new Error('Невалидное значение');
	}
	return parseResult;
}

function validateCount(val) {
	try {
		return parseCount(val);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (!(a + b > c && a + c > b && b + c > a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.sides = [a, b, c];
	}

	get perimeter() {
		return this.sides.reduce((sum, side) => sum + side, 0);
	}

	get area() {
		const halfPerimert = this.perimeter / 2;
		return parseFloat(Math.sqrt(this.sides.reduce((val, side) => val * (halfPerimert - side), halfPerimert)).toFixed(3));
	}

}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует'
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует'
			}
		};
	}
}