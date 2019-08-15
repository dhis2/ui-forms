import React from 'react'
import { storiesOf } from '@storybook/react'

import { RadioGroup, required } from '../src'
import { formDecorator } from './helpers/formDecorator'

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('RadioGroup', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <RadioGroup name="fooBarBaz" label="FooBarBaz" options={options} />
    ))
    .add('Required', () => (
        <RadioGroup
            name="fooBarBaz"
            label="FooBarBaz *"
            options={options}
            validate={required}
        />
    ))
