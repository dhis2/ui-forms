import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, RadioGroup, hasValue } from '../src/index.js'
import { formDecorator } from '../.storybook/formDecorator.js'

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
            validate={hasValue}
            required
            options={cypressProps.options || defaultOptions}
        />
    ))
