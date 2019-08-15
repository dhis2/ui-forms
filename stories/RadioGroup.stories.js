import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, RadioGroup, required } from '../src'
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
            name="default"
            label="Choose something"
            component={RadioGroup}
            options={options}
            type="select"
        />
    ))
    .add('Required', () => (
        <Field
            name="default"
            label="Choose something"
            component={RadioGroup}
            validate={required}
            required
            options={options}
            type="select"
        />
    ))
