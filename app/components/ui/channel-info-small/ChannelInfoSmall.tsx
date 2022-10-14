import React, { FC } from 'react'

import UserAvatar from '@/components/ui/user-avatar/UserAvatar'

import { IUser } from '@/types/user.interface'

import { formatNumberToK } from '@/utils/format-number-to-k'

import styles from './channelInfoSmall.style.module.scss'

interface IChannelInfoSmall {
	channel: IUser
	message?: string
}

const ChannelInfoSmall: FC<IChannelInfoSmall> = ({ channel, message }) => {
	return (
		<div className={styles['profile-info']}>
			{channel.avatarPath && <UserAvatar user={channel} />}

			<div>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles['subscribers-count']}>
					{message ||
						formatNumberToK(channel.subscribersCount) + ' subscribers'}
				</div>
			</div>
		</div>
	)
}

export default ChannelInfoSmall
