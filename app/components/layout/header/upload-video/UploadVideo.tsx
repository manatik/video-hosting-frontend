import React, { useState } from 'react'
import { HiUpload } from 'react-icons/hi'

import { videoApi } from '@/store/api/video.api'

import stylesIcon from '../icons-right/iconsRight.style.module.scss'

const UploadVideo = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [videoId, setVideoId] = useState<number | null>(null)

	const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation()

	return (
		<div>
			<button
				className={stylesIcon.button}
				disabled={isLoading}
				onClick={() =>
					createVideo()
						.unwrap()
						.then(id => {
							setVideoId(+id)
							setIsOpen(true)
						})
				}
			>
				<HiUpload />
			</button>
		</div>
	)
}

export default UploadVideo
