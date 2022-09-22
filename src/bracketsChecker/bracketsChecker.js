function checkBrackets(str) {
	const stack = []

	for (let i = 0; i < str.length; i++) {
		const bracket = str[i]

		if (bracket === "(" || bracket === "[" || bracket === "{") {
			stack.push(bracket)
		} else {
			const last = stack.pop()
			if (
				!last ||
				(last === "(" && bracket !== ")") ||
				(last === "[" && bracket !== "]") ||
				(last === "{" && bracket !== "}")
			)
				return false
		}
	}

	return stack.length === 0
}

module.exports = checkBrackets