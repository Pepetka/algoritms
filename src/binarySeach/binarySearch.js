function binarySearch(SortedArr, item) {
	let min = 0,
		max = SortedArr.length - 1,
		mid

	if (item < SortedArr[min] || item > SortedArr[max]) return -1

	while (min < max) {
		mid = Math.floor((min + max) / 2)

		if (item === SortedArr[mid]) return mid

		if (item < SortedArr[mid]) {
			max = mid
		} else {
			min = mid
		}
	}

	return -1
}

module.exports = binarySearch