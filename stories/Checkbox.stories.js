import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, CheckboxAdapter, required } from '../src'
import { formDecorator } from './helpers/formDecorator'

storiesOf('Checkbox', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={CheckboxAdapter} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={CheckboxAdapter}
            required
            validate={required}
            label="Do you agree?"
        />
    ))
    .add('Disabled', () => (
        <Field
            name="agree"
            component={CheckboxAdapter}
            disabled
            label="Do you agree?"
        />
    ))
    .add('Help text', () => (
        <Field
            name="agree"
            component={CheckboxAdapter}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))
    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={CheckboxAdapter}
                label="Valid"
                valid
            />
            <Field
                name="warning"
                component={CheckboxAdapter}
                label="Warning"
                warning
            />
            <Field
                name="error"
                component={CheckboxAdapter}
                label="Error"
                error
                errorText="Oops"
            />
        </>
    ))
    .add('Value when checked', () => (
        <>
            <Field
                name="bool"
                component={CheckboxAdapter}
                label="I produce boolean form values"
                helpText="Click submit and check the console"
            />
            <Field
                name="string"
                component={CheckboxAdapter}
                label="I produce string form values"
                checkedValue="value_when_checked"
                helpText="Click submit and check the console"
            />
        </>
    ))
