import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Switch, hasValue } from '../src'
import { formDecorator } from '../.storybook/formDecorator'

storiesOf('Testing:Switch', module)
    .addDecorator(formDecorator)
    .add('Unchecked', () => (
        <Field
            component={Switch}
            className="switch"
            name="switch"
            label="Label text"
            validate={hasValue}
            required
        />
    ))
    .add('Checked ', () => (
        <Field
            component={Switch}
            className="switch"
            name="switch"
            label="Label text"
            initialValue={true}
        />
    ))
    .add('Unchecked with value', () => (
        <Field
            component={Switch}
            className="switch"
            name="switch"
            label="Label text"
            checkedValue="yes"
        />
    ))
    .add('Checked with value', () => (
        <Field
            component={Switch}
            className="switch"
            name="switch"
            label="Label text"
            checkedValue="yes"
            initialValue="yes"
        />
    ))
