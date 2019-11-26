import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Input, required } from '../src'
import { formDecorator } from '../.storybook/formDecorator'

storiesOf('Component: Input', module)
    .addDecorator(formDecorator)

    .add('Default', () => (
        <Field component={Input} name="agree" label="Do you agree?" />
    ))

    .add('Required', () => (
        <Field
            name="agree"
            component={Input}
            required
            validate={required}
            label="Do you agree?"
        />
    ))

    .add('Disabled', () => (
        <Field name="agree" component={Input} disabled label="Do you agree?" />
    ))

    .add('Help text', () => (
        <Field
            name="agree"
            component={Input}
            label="Do you agree?"
            helpText="Click to agree"
        />
    ))

    .add('Validation text', () => (
        <>
            <h3>Without error:</h3>
            <Field
                name="agree"
                component={Input}
                label="Do you agree?"
                validationText="Click to agree"
            />

            <h3>With error:</h3>
            <Field
                error
                name="agree"
                component={Input}
                label="Do you agree?"
                validationText="Click to agree"
            />
        </>
    ))

    .add('Statuses', () => (
        <>
            <Field
                name="valid"
                component={Input}
                label="Valid"
                valid
                validationText="Validation text"
            />
            <Field
                name="warning"
                component={Input}
                label="Warning"
                warning
                validationText="Validation text"
            />
            <Field
                name="error"
                component={Input}
                label="Error"
                error
                validationText="Validation text"
            />
        </>
    ))
