import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import UserAvatar from '@/components/ui/user-avatar/UserAvatar'
import VideoDuration from '@/components/ui/video-item/VideoDuration'
import VideoStatistics from '@/components/ui/video-item/VideoStatistics'

import { IVideo } from '@/types/video.interface'

import styles from './videoItem.style.module.scss'

interface ILargeVideoItem {
	video: IVideo
}

const LargeVideoItem: FC<ILargeVideoItem> = ({ video }) => {
	if (!Object.keys(video).length) {
		return null
	}

	return (
		<div className={cn(styles['video-item'], styles['large-item'])}>
			<div className={styles.thumbnail}>
				{video.thumbnailPath && (
					<Image
						src={video.thumbnailPath}
						alt={video.name}
						layout='fill'
						className={styles['bg-image']}
						priority
					/>
				)}

				<VideoDuration duration={video.duration} isBottom />

				<div className={styles.information}>
					<Link href={`/v/${video.id}`}>
						<a className={styles.name}>{video.name}</a>
					</Link>

					{video.user?.avatarPath && <UserAvatar user={video.user} isWhite />}

					<div className={styles.author}>{video.user?.name}</div>

					<VideoStatistics views={video.views} createdAt={video.createdAt} />
				</div>
			</div>
		</div>
	)
}

export default LargeVideoItem
