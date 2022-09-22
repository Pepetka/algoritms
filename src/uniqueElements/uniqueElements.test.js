const uniqueElements = require('./uniqueElements')

describe('uniqueElements', () => {
	const testArray = [
		1,1,1,2,3,4,5,5,5,6,6,2,8,18
	]
	const correctAnswer = [
		3,4,8,18
	]

	test('test some array', () => {
		expect(uniqueElements(testArray).sort()).toEqual(correctAnswer.sort())
	})
});