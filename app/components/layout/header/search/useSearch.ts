import { ChangeEvent, useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'

import { videoApi } from '@/store/api/video.api'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedTerm = useDebounce(searchTerm, 500)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { data, isSuccess } = videoApi.useGetVideosBySearchTermQuery(
		debouncedTerm,
		{
			skip: !debouncedTerm,
			selectFromResult: ({ data, ...rest }) => ({
				data: data?.slice(0, 4),
				...rest
			})
		}
	)

	return {
		handleSearch,
		data,
		isSuccess,
		searchTerm
	}
}
