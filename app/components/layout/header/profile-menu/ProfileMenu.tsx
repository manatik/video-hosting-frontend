import React from 'react'

import { useAuth } from '@/hooks/useAuth'

import { api } from '@/store/api/api'
import { useOutside } from "@/hooks/useOutside";
import { useActions } from "@/hooks/useActions";

import styles from './profileMenu.style.module.scss';
import Image from "next/image";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Link from "next/link";

const ProfileMenu = () => {
	const { user } = useAuth()
	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	})

	const { isShow, setIsShow, ref } = useOutside(false)

	const { logout } = useActions()

	if (isLoading) {
		return null
	}

	return <div ref={ref} className={styles.wrapper}>
		<button onClick={() => setIsShow(prev => !prev)}>
			<Image
				src={data?.avatarPath || ''}
				alt={data?.name}
				width={40}
				height={40}
				priority
			/>
			<span className={styles.name}>{data?.name}</span>
			{isShow ? <GoChevronUp/> : <GoChevronDown />}
		</button>

		{isShow && (
			<div className={styles.profileMenu}>
				<ul>
					<li>
						<Link href={`/c/${user?.id}`}>
							<a>Мой канал</a>
						</Link>
					</li>

					<li>
						<Link href={'/studio'}>
							<a>В студию</a>
						</Link>
					</li>

					<li>
						<button onClick={logout}>Выйти</button>
					</li>
				</ul>
			</div>
		)}
	</div>
}

export default ProfileMenu
