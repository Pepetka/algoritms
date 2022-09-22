const binarySearch = require('./binarySearch')

describe('binarySearch', () => {
	const dataBase = [
		2,  3,  6,  6, 12, 12, 16,
		19, 22, 22, 22, 26, 34, 43,
		56, 66, 67, 75, 75, 78, 92,
		94
	]

	test('find some element', () => {
		expect(binarySearch(dataBase, 26)).toBe(11)
	})
	test('find top nonexistent element', () => {
		expect(binarySearch(dataBase, 100)).toBe(-1)
	})
	test('find bottom nonexistent element', () => {
		expect(binarySearch(dataBase, 1)).toBe(-1)
	})
});