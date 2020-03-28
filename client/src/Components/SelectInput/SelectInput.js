/* Библиотеки */
import React from 'react'
import { useField } from 'formik'
import Select from 'react-select'

const SelectInput = ({ ...props }) => {
	const { options } = props
	const [field, meta, helpers] = useField(props)

	const labels = options.map(option => {
		return {
			label: option.name,
			value: option.name
		}
	})
	
	const state = {
		fieldValue: field.value
	}

	const customStyles = {
		placeholder: (provided) => ({
			...provided,
			fontSize: 14
		}),

		singleValue: (provided) => ({
			...provided,
			fontSize: 14
		}),

		control: (provided) => ({
			...provided,
			borderWidth: 2,
			marginBottom: 10,
			height: 42,
			borderRadius: 10,
			cursor: 'pointer',
			borderColor: `
				${!meta.touched ? '#cccccc' : ''} 
				${meta.error && meta.touched ? 'red' : ''} 
				${!meta.error && meta.touched ? 'green' : ''} 
			`,

			'&:hover': {
				opacity: 0.8
			}
		}),
	}

	return (
		<div>
			<Select
				{...props}
				styles={customStyles}
				options={labels}
				onChange={option => helpers.setValue(option.value)}
				value={labels.filter(({ value }) => value === state.fieldValue)}
				onBlur={() => helpers.setTouched(true)}
			/>
		</div>
	)
}

export default SelectInput