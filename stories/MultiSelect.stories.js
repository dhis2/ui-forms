import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, MultiSelect } from '../src'
import { formDecorator } from '../.storybook/formDecorator'

const options = [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
    { value: '5', label: 'five' },
    { value: '6', label: 'six' },
    { value: '7', label: 'seven' },
    { value: '8', label: 'eight' },
    { value: '9', label: 'nine' },
    { value: '10', label: 'ten' },
]

const initialValue = ['2', '5']

storiesOf('MultiSelect', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={MultiSelect}
            name="agree"
            label="Do you agree?"
            options={options}
        />
    ))
    .add('InitialValue', () => (
        <Field
            component={MultiSelect}
            name="agree"
            label="Do you agree?"
            options={options}
            initialValue={initialValue}
        />
    ))