import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, File, required } from '../src'
import { formDecorator } from './helpers/formDecorator'

storiesOf('File', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={File}
            type="file"
            name="upload"
            label="This is a file upload"
        />
    ))
    .add('Required', () => (
        <Field
            component={File}
            type="file"
            name="upload"
            label="This is a file upload"
            required
            validate={required}
        />
    ))
