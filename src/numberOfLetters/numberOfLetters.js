function mix(s1, s2) {
	const s1Obj = {},
		s2Obj = {},
		sumArr = [],
		s1Set = new Set(s1.replace(/[^a-z]/g, "")),
		s2Set = new Set(s2.replace(/[^a-z]/g, "")),
		sumSet = new Set((s1 + s2).replace(/[^a-z]/g, ""))

	s1Set.forEach((el) => (s1Obj[el] = (s1.match(new RegExp(el, "g")) || []).length))
	s2Set.forEach((el) => (s2Obj[el] = (s2.match(new RegExp(el, "g")) || []).length))

	let i = 0
	sumSet.forEach((el) => {
		const s1Num = s1Obj[el] ? s1Obj[el] : 0,
			s2Num = s2Obj[el] ? s2Obj[el] : 0

		const strNum = s2Num === s1Num ? 3 : s2Num > s1Num ? 2 : 1

		sumArr[i] = {
			strNum,
			letter: el,
			lettersNum: Math.max(s1Num, s2Num),
		}

		i++
	})

	return sumArr
		.filter((el) => el.lettersNum > 1)
		.sort((a, b) => {
			return b.lettersNum - a.lettersNum
		})
		.sort((a, b) => {
			if (a.lettersNum === b.lettersNum) return a.strNum - b.strNum
			return 1
		})
		.sort((a, b) => {
			if (a.lettersNum === b.lettersNum && a.strNum === b.strNum) {
				if (a.letter > b.letter) return 1
				if (a.letter < b.letter) return -1
			}
			return 1
		})
		.map((el) => `${el.strNum === 3 ? "=" : el.strNum}:${el.letter.repeat(el.lettersNum)}`)
		.join("/")
}

module.exports = mix