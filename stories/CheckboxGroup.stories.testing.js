import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, CheckboxGroup, hasValue } from '../src/index.js'
import { formDecorator } from '../.storybook/formDecorator.js'

const defaultOptions = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('Testing:CheckboxGroup', module)
    .addDecorator(formDecorator)
    .add('Default', ({ cypressProps }) => (
        <Field
            name="choice"
            label="Choose something"
            component={CheckboxGroup}
            options={cypressProps.options || defaultOptions}
        />
    ))
    .add('Required', ({ cypressProps }) => (
        <Field
            name="choice"
            label="Choose something"
            component={CheckboxGroup}
            validate={hasValue}
            required
            options={cypressProps.options || defaultOptions}
            inline={false}
        />
    ))
