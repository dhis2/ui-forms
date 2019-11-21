import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, SwitchGroup, arrayWithIdObjects, required } from '../src'
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

    .add('Different value transformers', () => (
        <>
            <Field
                name="array"
                label="My values are going to the form as an array of strings (default)"
                component={SwitchGroup}
                options={options}
            />
            <Field
                name="arrayWithIdObjects"
                label="My values are going to the form as an array objects with an ID"
                component={SwitchGroup}
                options={options}
                format={arrayWithIdObjects.format}
                parse={arrayWithIdObjects.parse}
            />
        </>
    ))
