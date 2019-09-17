import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, RadioGroupAdapter, required } from '../src'
import { formDecorator } from './helpers/formDecorator'

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('RadioGroup', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroupAdapter}
            options={options}
        />
    ))
    .add('Required', () => (
        <Field
            name="choice"
            label="Choose something"
            component={RadioGroupAdapter}
            validate={required}
            required
            options={options}
            inline={false}
        />
    ))
