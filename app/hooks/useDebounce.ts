import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	const handler = setTimeout(() => {
		setDebouncedValue(value)
	}, delay)

	useEffect(() => {
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}
