import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, FileInput, required } from '../src'
import { formDecorator } from '../.storybook/formDecorator'

const files = [new File([], 'file1.txt'), new File([], 'file2.txt')]

storiesOf('Component: FileInput', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field
            component={FileInput}
            name="upload"
            label="This is a file upload"
        />
    ))
    .add('Required', () => (
        <Field
            component={FileInput}
            name="upload"
            label="This is a file upload"
            required
            validate={required}
        />
    ))
    .add('Multifile', () => (
        <Field
            component={FileInput}
            name="upload"
            label="This is a file upload"
            multifile
        />
    ))
    .add('With values', () => (
        <Field
            component={FileInput}
            name="upload"
            label="This is a file upload"
            required
            multifile
            initialValue={files}
            validate={required}
        />
    ))
    .add('Prevent placeholder', () => (
        <Field
            component={FileInput}
            name="upload"
            label="This is a file upload"
            placeholder=""
        />
    ))