export const useBgColor = (isValid) => {
	const BgColor = (intensity) => {
		return (isValid === 'valid')
			? `bg-green-${intensity}`
			: (isValid === 'full')
				? `bg-yellow-${intensity}`
				: `bg-red-${intensity}`
	}
	return {
		BgColor
	}
}