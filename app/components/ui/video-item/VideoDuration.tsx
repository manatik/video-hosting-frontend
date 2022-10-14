import React, { FC } from 'react'

import styles from './videoItem.style.module.scss'

interface IVideoDuration {
	duration: number
	isBottom?: boolean
}

const VideoDuration: FC<IVideoDuration> = ({ duration, isBottom }) => {
	return <time className={isBottom ? styles.bottom : ''}>{duration} мин.</time>
}

export default VideoDuration
