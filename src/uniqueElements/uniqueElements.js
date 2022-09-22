/* function withoutRepeat(arr) {
	return arr.filter((el) => arr.filter((elem) => elem === el).length === 1)
} */

function withoutRepeat(arr) {
	const answerArr = []
	const obj = {}

	arr.forEach((el) => {
		if (el in obj) {
			obj[el] += 1
			return
		}

		obj[el] = 1
	})

	for (const key in obj) {
		if (obj[key] === 1) answerArr.push(+key)
	}

	return answerArr
}

module.exports = withoutRepeat