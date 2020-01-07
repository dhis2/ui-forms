import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Checkbox, hasValue } from '../src'
import { formDecorator } from '../.storybook/formDecorator'

storiesOf('Testing:Checkbox', module)
    .addDecorator(formDecorator)
    .add('Unchecked', () => (
        <Field
            component={Checkbox}
            className="checkbox"
            name="checkbox"
            label="Label text"
            validate={hasValue}
            required
        />
    ))
    .add('Checked ', () => (
        <Field
            component={Checkbox}
            className="checkbox"
            name="checkbox"
            label="Label text"
            initialValue={true}
        />
    ))
    .add('Unchecked with value', () => (
        <Field
            component={Checkbox}
            className="checkbox"
            name="checkbox"
            label="Label text"
            checkedValue="yes"
        />
    ))
    .add('Checked with value', () => (
        <Field
            component={Checkbox}
            className="checkbox"
            name="checkbox"
            label="Label text"
            checkedValue="yes"
            initialValue="yes"
        />
    ))
