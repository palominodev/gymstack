export const useBgColor = (isValid) => {
	const bgColor = (intensity) => {
		return (isValid === 'valid')
				? `bg-green-${intensity}`
				: (isValid === 'full')
					? `bg-yellow-${intensity}`
					: `bg-red-${intensity}`
	}
	return {
		bgColor
	}
}