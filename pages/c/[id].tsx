import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'

import Channel from '@/components/pages/channel/Channel'
import { IChannel } from '@/components/pages/channel/channel.interface'

import { UserService } from '@/services/user/user.service'

import { IUser } from '@/types/user.interface'

const ChannelPage: NextPage<IChannel> = ({ channel }) => {
	return <Channel channel={channel} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: users } = await UserService.getAll()

		const paths = users.map(user => ({
			params: {
				id: String(user.id)
			}
		}))

		return {
			paths,
			fallback: 'blocking'
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps<IChannel> = async ({ params }) => {
	try {
		const { data: channel } = await UserService.getUser(Number(params?.id))

		return {
			props: {
				channel
			}
		}
	} catch (e) {
		return {
			props: {
				channel: {} as IUser
			}
		}
	}
}

export default ChannelPage
