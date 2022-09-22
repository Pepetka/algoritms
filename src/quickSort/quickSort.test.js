const quickSort = require('./quickSort')

describe('quickSort', () => {
	const dataBase = [
		12, 34, 75, 2, 78, 12, 92, 16, 26, 22, 66, 22, 67, 94, 22, 56, 43, 75, 3, 6, 19, 6,
	]
	const correctAnswer = [
		2,  3,  6,  6, 12, 12, 16,
			19, 22, 22, 22, 26, 34, 43,
			56, 66, 67, 75, 75, 78, 92,
			94
		]

	test('sort test', () => {
		expect(quickSort(dataBase)).toEqual(correctAnswer)
	})
});