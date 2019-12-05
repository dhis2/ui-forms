import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Switch, required } from '../src'
import { testingFormDecorator } from '../.storybook/formDecorator'

storiesOf('Testing:Switch', module)
    .addDecorator(testingFormDecorator)
    .add('Unchecked', () => (
        <Field
            component={Switch}
            className="switch"
            name="switch"
            label="Label text"
            validate={required}
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
