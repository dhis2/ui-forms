import { Field } from 'react-final-form'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { SingleSelect, required } from '../src'
import { testingFormDecorator } from '../.storybook/formDecorator.js'

/**
 * With this and `window.forceUpdate` from the
 * formDecorator, we can change the rendered options
 */
window.options = [{ value: 'initial', label: 'Initial' }]
const getOptions = () => window.options

const Form = () => (
    <Field
        required
        name="singleSelect"
        label="Single select"
        component={SingleSelect}
        validate={required}
        options={getOptions()}
    />
)

storiesOf('Testing:SingleSelect', module)
    .addDecorator(testingFormDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Required', ({ formRenderProps }) => <Form {...formRenderProps} />)
