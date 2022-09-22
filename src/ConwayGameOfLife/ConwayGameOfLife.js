function arrayExpansion(arr) {
	const rowFlag = [false, false],
		colFlag = [false, false]

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] !== 0) rowFlag[0] = true
		if (arr[i][arr[i].length - 1] !== 0) rowFlag[1] = true
	}

	for (let j = 0; j < arr[0].length; j++) {
		if (arr[0][j] !== 0) colFlag[0] = true
		if (arr[arr.length - 1][j] !== 0) colFlag[1] = true
	}

	if (rowFlag[0]) {
		for (let i = 0; i < arr.length; i++) {
			arr[i].unshift(0)
		}
	}

	if (rowFlag[1]) {
		for (let i = 0; i < arr.length; i++) {
			arr[i].push(0)
		}
	}

	if (colFlag[0]) {
		arr.unshift(Array(arr[0].length).fill(0))
	}

	if (colFlag[1]) {
		arr.push(Array(arr[0].length).fill(0))
	}
}

function arrayCompression(arr) {
	const rowFlag = [false, false],
		colFlag = [false, false]

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] !== 0) rowFlag[0] = true
		if (arr[i][arr[i].length - 1] !== 0) rowFlag[1] = true
	}

	for (let j = 0; j < arr[0].length; j++) {
		if (arr[0][j] !== 0) colFlag[0] = true
		if (arr[arr.length - 1][j] !== 0) colFlag[1] = true
	}

	if (rowFlag[0] && rowFlag[1] && colFlag[0] && colFlag[1]) {
		return
	}

	if (!rowFlag[0]) {
		for (let i = 0; i < arr.length; i++) {
			arr[i].shift()
		}
	}

	if (!rowFlag[1]) {
		for (let i = 0; i < arr.length; i++) {
			arr[i].pop()
		}
	}

	if (!colFlag[0]) {
		arr.shift()
	}

	if (!colFlag[1]) {
		arr.pop()
	}

	arrayCompression(arr)
}

function getGeneration(cells, generations) {
	let arr = Array(cells.length)
		.fill(0)
		.map((el, i) => [...cells[i]])

	for (let g = 0; g < generations; g++) {
		arrayExpansion(arr)
		console.table(arr)
		const copyArr = Array(arr.length)
			.fill(0)
			.map((el, i) => Array(arr[i].length).fill(0))

		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				let sumNeighbours = 0

				for (let k = -1; k <= 1; k++) {
					const el1 = i - 1 < 0 || j + k < 0 || j + k >= arr[i].length ? 0 : arr[i - 1][j + k],
						el2 = i + 1 >= arr.length || j + k < 0 || j + k >= arr[i].length ? 0 : arr[i + 1][j + k]

					sumNeighbours += el1 + el2
				}

				const el3 = j - 1 < 0 ? 0 : arr[i][j - 1],
					el4 = j + 1 >= arr[i].length ? 0 : arr[i][j + 1]

				sumNeighbours += el3 + el4

				copyArr[i][j] =
					sumNeighbours < 2 || sumNeighbours > 3 ? 0 : sumNeighbours === 2 ? arr[i][j] : 1
			}
		}
		arr = copyArr
	}

	arrayCompression(arr)

	return arr
}

module.exports = getGeneration