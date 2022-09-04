import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { validEmail } from '@/components/layout/header/auth-form/auth.valid'
import { IAuthFields } from '@/components/layout/header/auth-form/authForm.interface'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import stylesIcon from '../icons-right/iconsRight.style.module.scss'

import styles from './authForm.style.module.scss'

const AuthForm = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')
	const { login, register: registerAction } = useActions()
	const { isLoading } = useAuth()

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		switch (type) {
			case 'login':
				login(data)
				break
			case 'register':
				registerAction(data)
				break
			default:
				login(data)
				break
		}
	}

	return (
		<div className={styles.wrapper} ref={ref}>
			<button
				className={stylesIcon.button}
				onClick={() => setIsShow(prev => !prev)}
			>
				<FaUserCircle fill={'#a4a4a4'} />
			</button>

			{isShow && (
				<form className={styles.form} onClick={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'E-mail обязателен',
							pattern: {
								value: validEmail,
								message: 'Невалидный E-mail'
							}
						})}
						placeholder='E-mail'
						error={errors.email}
					/>

					<Field
						{...register('password', {
							required: 'Пароль обязателен',
							minLength: {
								value: 6,
								message: 'Мин. длина пароля - 6 символов'
							}
						})}
						placeholder='Пароль'
						error={errors.password}
					/>

					<div className={'mt-5 mb-1 text-center'}>
						<Button onClick={() => setType('login')} disabled={isLoading}>
							Войти
						</Button>
					</div>

					<button
						className={styles.register}
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Регистрация
					</button>
				</form>
			)}
		</div>
	)
}

export default AuthForm
