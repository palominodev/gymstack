export const useBgColor = (isValid) => {
	const BgColor = (intensity) => {
		return (isValid === 'valid')
			? `green-${intensity}`
			: (isValid === 'full')
				? `yellow-${intensity}`
				: `red-${intensity}`
	}
	const colors_soft = {
		deprecated: 'bg-red-500',
		valid: 'bg-green-500',
		full: 'bg-yellow-500',
	}
	const colors = {
		deprecated: 'bg-red-600',
		valid: 'bg-green-600',
		full: 'bg-yellow-600'
	}
	return {
		BgColor,
		colors,
		colors_soft,
		color_soft: colors_soft[isValid],
		color: colors[isValid]
	}
}