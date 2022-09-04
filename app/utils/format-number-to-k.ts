export const formatNumberToK = (num: number) => {
	const numbers = {
		G: 1000000000,
		M: 1000000,
		K: 1000
	}

	const regExp = /\.0$/

	if (num >= numbers.G) {
		return (num / numbers.G).toFixed(1).replace(regExp, '') + 'G'
	}

	if (num >= numbers.M) {
		return (num / numbers.M).toFixed(1).replace(regExp, '') + 'M'
	}

	if (num >= numbers.K) {
		return (num / numbers.K).toFixed(1).replace(regExp, '') + 'K'
	}

	return num
}
