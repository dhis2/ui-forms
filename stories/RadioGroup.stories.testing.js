import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, RadioGroup, required } from '../src'
import { testingFormDecorator } from '../.storybook/formDecorator'

/**
 * With this and `window.forceUpdate` from the
 * formDecorator, we can change the rendered options
 */
window.options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]
const getOptions = () => window.options

storiesOf('Testing:RadioGroup', module)
    .addDecorator(testingFormDecorator)
    .add('Default', () => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroup}
            options={getOptions()}
        />
    ))
    .add('Required', () => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroup}
            validate={required}
            required
            options={getOptions()}
        />
    ))
