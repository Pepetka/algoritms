const sumInterval = require('./intervalsSum')

describe('intervalsSum', () => {
	const tests = {
		9: [
			[1,2],
			[6, 10],
			[11, 15]
		],
		7: [
			[1,4],
			[7, 10],
			[3, 5]
		],
		19: [
			[1, 5],
			[1, 6],
			[5, 11],
			[10, 20],
			[16, 19],
		],
		100000030: [
			[0, 20],
			[-100000000, 10],
			[30, 40]
		]
	}

	let i = 0
	for (const testsKey in tests) {
		i++
		test(`test number ${i}`, () => {
			expect(sumInterval(tests[testsKey])).toBe(+testsKey)
		})
	}
	test(`end = start`, () => {
		expect(sumInterval([[1,2],[2,3]])).toBe(2)
	})
	test(`inside`, () => {
		expect(sumInterval([[1,5],[2,5]])).toBe(4)
	})
	test(`different intervals`, () => {
		expect(sumInterval([[1,2],[3,4]])).toBe(2)
	})
});