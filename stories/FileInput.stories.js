import React from 'react'
import { storiesOf } from '@storybook/react'

import { Field, FileInputAdapter, required } from '../src'
import { formDecorator } from './helpers/formDecorator'

const files = [
    new File([], 'file1.txt'),
    new File([], 'file2.txt'),
    new File([], 'file3.txt'),
]

storiesOf('FileInput', module)
    .addDecorator(formDecorator)
    .add('Default', () => (
        <Field component={FileInputAdapter} type="file" name="upload" />
    ))
    .add('With label', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            label="Please upload something"
        />
    ))
    .add('Custom button label', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            buttonLabel="I am a custom label"
            multifile
        />
    ))
    .add('Required', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            label="You must upload something"
            required
            validate={required}
        />
    ))
    .add('Disabled', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            disabled
        />
    ))
    .add('Help text', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            helpText="You can select any type of file you like"
        />
    ))
    .add('Sizes', () => (
        <>
            <Field
                component={FileInputAdapter}
                buttonLabel="Small"
                type="file"
                name="upload"
                small
            />
            <Field
                component={FileInputAdapter}
                buttonLabel="Default"
                type="file"
                name="upload"
            />
            <Field
                component={FileInputAdapter}
                buttonLabel="Large"
                type="file"
                name="upload"
                large
            />
        </>
    ))
    .add('Statuses', () => (
        <>
            <Field
                component={FileInputAdapter}
                buttonLabel="Default"
                type="file"
                name="upload"
            />
            <Field
                component={FileInputAdapter}
                buttonLabel="Valid"
                type="file"
                name="upload"
                valid
            />
            <Field
                component={FileInputAdapter}
                buttonLabel="Warning"
                type="file"
                name="upload"
                warning
            />
            <Field
                component={FileInputAdapter}
                buttonLabel="Error"
                type="file"
                name="upload"
                error
                errorText="Oops"
            />
        </>
    ))
    .add('Accept (image only)', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            accept="image/*"
        />
    ))
    .add('Multifile', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            multifile
        />
    ))
    .add('With files', () => (
        <Field
            component={FileInputAdapter}
            type="file"
            name="upload"
            multifile
            initialValue={files}
        />
    ))
