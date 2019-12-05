import { Field } from 'react-final-form'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MultiSelect, required } from '../src'
import { testingFormDecorator } from '../.storybook/formDecorator.js'

/**
 * With this and `window.forceUpdate` from the
 * formDecorator, we can change the rendered options
 */
window.options = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' },
]
const getOptions = () => window.options

const Form = () => (
    <Field
        required
        name="multiSelect"
        label="Multi select"
        component={MultiSelect}
        validate={required}
        options={getOptions()}
    />
)

storiesOf('Testing:MultiSelect', module)
    .addDecorator(testingFormDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Required', ({ formRenderProps }) => <Form {...formRenderProps} />)
