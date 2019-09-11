import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, CheckboxAdapter } from '../src'
import { formDecorator } from './helpers/formDecorator'

storiesOf('Checkbox', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={CheckboxAdapter} name="agree" label="Do you agree?" />
    ))
