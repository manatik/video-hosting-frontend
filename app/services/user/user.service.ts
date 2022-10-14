import { IUser } from '@/types/user.interface'

import { axiosClassic } from '../../api/axios'

export const USER = 'user'

export const UserService = {
	async getAll() {
		return axiosClassic.get<IUser[]>(`/${USER}/all`)
	},
	async getUser(id: number) {
		return axiosClassic.get<IUser>(`/${USER}/${id}`)
	}
}
