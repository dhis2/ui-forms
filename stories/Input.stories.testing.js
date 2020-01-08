import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, Input, hasValue } from '../src/index.js'
import { formDecorator } from '../.storybook/formDecorator.js'

storiesOf('Testing:Input', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={Input} name="agree" label="Do you agree?" />
    ))
    .add('Required', () => (
        <Field
            name="agree"
            component={Input}
            required
            validate={hasValue}
            label="Do you agree?"
        />
    ))
