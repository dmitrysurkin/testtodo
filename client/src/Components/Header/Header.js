/* Библиотеки */
import React from 'react'

/* Стили и компоненты */
import useStyles from './style'

const Header = () => {
	const classes = useStyles()

	return (
		<div className={classes.header}>
			<h2 className={classes.header__title}>Тестовое задание TODO-LIST</h2>
			<p className={classes.header__desc}>React, Redux, JSS, Express</p>
		</div>
	)
}

export default Header