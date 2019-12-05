import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, TextArea, required } from '../src'
import { formDecorator } from '../.storybook/formDecorator.js'

storiesOf('TextArea', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={TextArea}
            name="comment"
            label="Do you have any comments?"
        />
    ))
    .add('Required', () => (
        <Field
            required
            name="comment"
            component={TextArea}
            validate={required}
            label="Do you have any comments?"
        />
    ))
