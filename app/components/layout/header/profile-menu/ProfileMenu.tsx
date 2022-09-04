import React from 'react'

import { useAuth } from '@/hooks/useAuth'

import { api } from '@/store/api/api'

const ProfileMenu = () => {
	const { user } = useAuth()
	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	})

	if (isLoading) {
		return null
	}

	return <div>{data?.email}</div>
}

export default ProfileMenu
