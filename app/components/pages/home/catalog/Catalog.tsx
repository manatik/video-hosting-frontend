import React, { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'
import VideoItem from '@/components/ui/video-item/VideoItem'

import { IVideo } from '@/types/video.interface'

import styles from './catalog.style.module.scss'

interface ICatalog {
	newVideos: IVideo[]
	removeHandler?: (videoId: number) => void
	isUpdatedLink?: boolean
}

const Catalog: FC<ICatalog> = ({ isUpdatedLink, newVideos, removeHandler }) => {
	return (
		<div className={styles.recommended}>
			<div className={styles['top-block']}>
				<Heading title={removeHandler ? 'Мои видео' : 'Рекомендации'} />
			</div>

			<div className={styles.catalog}>
				{newVideos.map(video => (
					<VideoItem
						item={video}
						key={video.id}
						removeHandler={removeHandler}
						isUpdateLink={isUpdatedLink}
					/>
				))}
			</div>
		</div>
	)
}

export default Catalog
