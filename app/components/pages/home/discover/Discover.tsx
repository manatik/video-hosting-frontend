import React, { FC } from 'react'

import LargeVideoItem from '@/components/ui/video-item/LargeVideoItem'

import { IVideo } from '@/types/video.interface'

import styles from './discover.style.module.scss'

interface IDiscover {
	topVideo: IVideo
	randomVideo: IVideo
}

const Discover: FC<IDiscover> = ({ randomVideo, topVideo }) => {
	return (
		<div className={styles.discover}>
			<div className={styles['top-video']}>
				<LargeVideoItem video={topVideo} />
			</div>

			<div className={styles.randomVideo}>
				<LargeVideoItem video={randomVideo} />
			</div>
		</div>
	)
}

export default Discover
