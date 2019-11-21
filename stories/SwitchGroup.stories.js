import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, SwitchGroup, required } from '../src'
import { formDecorator } from '../.storybook/formDecorator'

const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
    { label: 'Baz', value: 'baz' },
]

const multipleValue = ['bar', 'baz']

storiesOf('SwitchGroup', module)
    .addDecorator(formDecorator)
    .add('Default - Switch', () => (
        <Field
            name="choice"
            label="Choose something"
            component={SwitchGroup}
            options={options}
            initialValue={multipleValue}
        />
    ))
    .add('Required - Switch', () => (
        <Field
            name="choice"
            label="Choose something"
            component={SwitchGroup}
            validate={required}
            required
            options={options}
            inline={false}
        />
    ))
