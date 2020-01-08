import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, TextArea, hasValue } from '../src/index.js'
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
            validate={hasValue}
            label="Do you have any comments?"
        />
    ))
