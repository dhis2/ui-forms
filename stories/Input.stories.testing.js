import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Input, required } from '../src'
import { testingFormDecorator } from '../.storybook/formDecorator.js'

storiesOf('Input', module)
    .addDecorator(testingFormDecorator)
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
