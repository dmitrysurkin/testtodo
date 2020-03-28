/* Библиотеки */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/* Action creator */
import { getExecutors, addTodo } from '../../Actions/index'

/* Стили и компоненты */
import useStyles from './style'
import SelectInput from '../SelectInput/SelectInput'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

const AddForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getExecutors())
	}, [])

	const executors = useSelector(store => store.executor.executors)
	const errorExecutor = useSelector(state => state.executor.error)

	if (errorExecutor) {
		return (
			<div className={classes.form__wrap}>
				<div className={classes.form__errorIndicator}>
					<ErrorIndicator message={errorExecutor} />
				</div>
			</div>
		)
	}

	return (
		<Formik
			initialValues={{ title: '', priority: '', executor: '' }}
			validationSchema={Yup.object().shape({
				title: Yup.string()
					.required('Введите название'),
				priority: Yup.number()
					.max(10, 'От 1 до 10')
					.min(1, 'От 1 до 10')
					.required('Укажите приоритет')
					.nullable(),
				executor: Yup.string()
					.required('Выберите исполнителя'),
			})}
			onSubmit={(data, { setSubmitting, resetForm, setFieldValue }) => {
				setSubmitting(true);
				
				dispatch(addTodo(data))

				setSubmitting(false);
				resetForm();
				setFieldValue('executor', '')
			}}
		>
			{({ handleSubmit, isSubmitting, errors, touched, values }) => (
				<Form onSubmit={handleSubmit} className={classes.form__wrap}>
					<div className={classes.form__item}>
						<label htmlFor="title" className={classes.form__label}>Название задачи</label>
						<Field
							type="text"
							name="title"
							id="title"
							placeholder="Введите название..."
							className={`${classes.form__input}
							${errors.title && touched.title ? ` ${classes.form__input_error}` : ""}
							${!errors.title && touched.title ? ` ${classes.form__input_success}` : ""}  
						`}
						/>
						<ErrorMessage name="title">
							{msg => <div className={classes.form__error}>{msg}</div>}
						</ErrorMessage>
					</div>
					<div className={classes.form__item}>
						<label htmlFor="priority" className={classes.form__label}>Укажите приоритет</label>
						<Field
							type="number"
							name="priority"
							id="priority"
							placeholder="Укажите приоритет..."
							className={`${classes.form__input}
								${errors.priority && touched.priority ? ` ${classes.form__input_error}` : ""}
								${!errors.priority && touched.priority ? ` ${classes.form__input_success}` : ""}  
							`}
						/>
						<ErrorMessage name="priority">
							{msg => <div className={classes.form__error}>{msg}</div>}
						</ErrorMessage>
					</div>
					<div className={classes.form__item}>
						<label htmlFor="executor" className={classes.form__label}>Выберите исполнителя</label>
						<SelectInput
							name="executor"
							id="executor"
							placeholder="Выберите..."
							options={executors}
						/>
						<ErrorMessage name="executor">
							{msg => <div className={classes.form__error}>{msg}</div>}
						</ErrorMessage>
					</div>
					<div className={classes.form__item}>
						<button disabled={isSubmitting} className={classes.form__button}>+ Создать задачу</button>
					</div>
				</Form>
			)
			}
		</Formik >
	);
}

export default AddForm