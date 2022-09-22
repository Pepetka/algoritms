function sumIntervals(intervals) {
	intervals.sort((a, b) => {
		if (a[0] - b[0] === 0) return a[1] - b[1]

		return a[0] - b[0]
	})

	let currentInterval = [],
		answer = 0

	intervals.forEach((el, i) => {
		if (i === 0) {
			currentInterval = el
			return
		}

		if (currentInterval[1] >= el[0] && currentInterval[1] <= el[1]) {
			currentInterval[1] = el[1]
			return
		}

		if (currentInterval[1] >= el[0] && currentInterval[1] >= el[1]) {
			return
		}

		answer += currentInterval[1] - currentInterval[0]
		currentInterval = el
	})

	answer += currentInterval[1] - currentInterval[0]
	return answer
}

module.exports = sumIntervals