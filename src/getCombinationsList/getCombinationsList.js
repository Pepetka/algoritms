function getNumOfCombinations(arrOfElements) {
	const arr = [...arrOfElements]

	return function (start = 0, end = arr.length - 1) {
		if (end < 0 || end >= arr.length) return 1

		let numOfCombinations = 1
		for (let i = start; i <= end; i++) {
			numOfCombinations *= arr[i].length
		}

		return numOfCombinations
	}
}

function getPINs(observed) {
	const keypad = [
		["1", "2", "3"],
		["4", "5", "6"],
		["7", "8", "9"],
		[null, "0", null],
	]

	const arrayOfCases = observed.split("").map((el) => {
		const arr = []

		for (let i = 0; i < keypad.length; i++) {
			for (let j = 0; j < keypad[i].length; j++) {
				if (keypad[i][j] == el) {
					arr.push(el)

					if (i - 1 >= 0) arr.push(keypad[i - 1][j])
					if (i + 1 < keypad.length && keypad[i + 1][j]) arr.push(keypad[i + 1][j])
					if (j - 1 >= 0 && keypad[i][j - 1]) arr.push(keypad[i][j - 1])
					if (j + 1 < keypad[i].length && keypad[i][j + 1]) arr.push(keypad[i][j + 1])
				}
			}
		}

		return arr
	})

	const numberOfCombinations = getNumOfCombinations(arrayOfCases)

	for (let i = 0; i < arrayOfCases.length; i++) {
		arrayOfCases[i] = arrayOfCases[i]
			.reduce((acc, curr) => acc + curr.repeat(numberOfCombinations(i + 1)), "")
			.repeat(numberOfCombinations(0, i - 1))
			.split("")
	}

	const answerArr = []

	for (let j = 0; j < numberOfCombinations(); j++) {
		let str = ""
		for (let i = 0; i < arrayOfCases.length; i++) {
			str += arrayOfCases[i][j]
		}
		answerArr.push(str)
	}

	return answerArr
}

module.exports = getPINs