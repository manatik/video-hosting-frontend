import React from 'react'

import { useSearch } from '@/components/layout/header/search/useSearch'
import VideoItem from '@/components/ui/video-item/VideoItem'

import styles from './search.style.module.scss'

const Search = () => {
	const { data, searchTerm, handleSearch, isSuccess } = useSearch()

	return (
		<div className={styles['search-top']}>
			<label>
				<input
					type='text'
					placeholder={'Поиск видео...'}
					value={searchTerm}
					onChange={handleSearch}
				/>

				<img
					src={'/uploads/front-icons/search.svg'}
					alt={'search-icon'}
					height={20}
					width={20}
				/>
			</label>

			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(video => <VideoItem isSmall item={video} key={video.id} />)
					) : (
						<div className='text-white'>Видео не найдены!</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Search
