const checkBrackets = require('./bracketsChecker')

describe('checkBrackets', () => {
	test('only one type brackets - correct order order', () => {
		expect(checkBrackets('((()))')).toBe(true)
	})
	test('only one type brackets - wrong order', () => {
		expect(checkBrackets('((())')).toBe(false)
	})
	test('all types brackets - correct order', () => {
		expect(checkBrackets('(({[()]}))')).toBe(true)
	})
	test('all types brackets - wrong order', () => {
		expect(checkBrackets('(({[(])}))')).toBe(false)
	})
})