import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, TextArea, required } from '../src'
import { testingFormDecorator } from '../.storybook/formDecorator.js'

storiesOf('TextArea', module)
    .addDecorator(testingFormDecorator)
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
