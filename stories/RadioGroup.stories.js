import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form, RadioGroup, required } from '../src'

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

storiesOf('RadioGroup', module)
    .addDecorator(fn => <Form onSubmit={console.log}>{() => fn()}</Form>)
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
