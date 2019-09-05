import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, FileInputAdapter, required } from '../src'
import { formDecorator } from './helpers/formDecorator'

storiesOf('FileInput', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            label="This is a file upload"
            multifile
        />
    ))
    .add('Required', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            label="This is a file upload"
            required
            validate={required}
        />
    ))
