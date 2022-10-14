import shuffle from 'lodash/shuffle'
import type { GetStaticProps, NextPage } from 'next'

import Home from '@/components/pages/home/Home'
import { IHome } from '@/components/pages/home/home.interface'

import { VideoService } from '@/services/video/video.service'

import { IVideo } from '@/types/video.interface'

const HomePage: NextPage<IHome> = props => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps<IHome> = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll()
		const { data: topVideos } = await VideoService.getMostPopular()

		return {
			props: {
				newVideos,
				topVideo: topVideos[0],
				randomVideo:
					shuffle(newVideos.filter(v => v.id !== topVideos[0].id))[0] || {}
			}
		}
	} catch (e) {
		return {
			props: {
				newVideos: [],
				topVideo: {} as IVideo,
				randomVideo: {} as IVideo
			}
		}
	}
}

export default HomePage
