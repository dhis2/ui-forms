import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, RadioGroup, required } from '../src'
import { formDecorator } from '../.storybook/formDecorator'

const defaultOptions = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('Testing:RadioGroup', module)
    .addDecorator(formDecorator)
    .add('Default', ({ cypressProps }) => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroup}
            options={cypressProps.options || defaultOptions}
        />
    ))
    .add('Required', ({ cypressProps }) => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroup}
            validate={required}
            required
            options={cypressProps.options || defaultOptions}
        />
    ))
