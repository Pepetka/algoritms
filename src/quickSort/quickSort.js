function quickSort(arr) {
	if (arr.length < 2) {
		return arr
	}

	const baseIndex = 0,
		lessArr = [],
		greaterArr = []

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= arr[baseIndex]) {
			lessArr.push(arr[i])
		} else {
			greaterArr.push(arr[i])
		}
	}

	return [...quickSort(lessArr), arr[baseIndex], ...quickSort(greaterArr)]
}

module.exports = quickSort