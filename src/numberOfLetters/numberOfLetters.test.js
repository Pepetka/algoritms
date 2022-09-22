const mix = require('./numberOfLetters')

describe('number of letters', () => {
	const tests = {
		"2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss": ["my&friend&Paul has heavy hats! &", "my friend" +
		" John has many many friends &"],
		"1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss": ["mmmmm m nnnnn y&friend&Paul has heavy" +
		" hats! &", "my frie n d Joh n has ma n y ma n y frie n ds n&"],
		"=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh": ["Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff"],
	}

	let i = 0
	for (const testsKey in tests) {
		i++
		test(`test number ${i}`, () => {
			expect(mix(...tests[testsKey])).toBe(testsKey)
		})
	}
});