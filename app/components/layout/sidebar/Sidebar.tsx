import Link from 'next/link'
import React, { FC } from 'react'

import Menu from '@/components/layout/sidebar/menu/Menu'
import { menu } from '@/components/layout/sidebar/menu/menu.data'

import styles from './sidebar.style.module.scss'

const Sidebar: FC = () => {
	// TODO: get profile

	return (
		<aside className={styles.sidebar}>
			<Link href={'/'}>
				<a className={styles.logo}>Rutube 2.0</a>
			</Link>

			<Menu title={'Меню'} items={menu} />

			<div className={styles.copy}>2022 RUTUBE 2.0 by Manatik</div>
		</aside>
	)
}

export default Sidebar
