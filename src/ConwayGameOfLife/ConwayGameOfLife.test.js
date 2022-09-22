const getGeneration = require('./ConwayGameOfLife')

describe('ConwayGameOfLife', () => {
	const gliders = [
		[[1,0,0],
			[0,1,1],
			[1,1,0]],
		[[0,1,0],
			[0,0,1],
			[1,1,1]]
	];

	test('test some game', () => {
		expect(getGeneration(gliders[0],1)).toEqual(gliders[1])
	})
})