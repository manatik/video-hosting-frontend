import React, { FC } from 'react'

import IconsRight from '@/components/layout/header/icons-right/IconsRight'
import Search from '@/components/layout/header/search/Search'

import styles from './header.style.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Search />
			<IconsRight />
		</header>
	)
}

export default Header
