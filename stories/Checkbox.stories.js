import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Checkbox, required } from '../src'
import { formDecorator } from './helpers/formDecorator'

storiesOf('Checkbox', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={Checkbox} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={Checkbox}
            required
            validate={required}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field
            name="agree"
            component={Checkbox}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={Checkbox}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={Checkbox}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={Checkbox}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={Checkbox}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
    .add('Value when checked', () => (
        <>
            <Field
                name="bool"
                component={Checkbox}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <Field
                name="string"
                component={Checkbox}
                label="I produce string form values"
                checkedValue="value_when_checked"
                helpText="Click submit and check the console"
            />
        </>
    ))
