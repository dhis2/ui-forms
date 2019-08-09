import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form, File, required } from '../src'

storiesOf('File', module)
    .addDecorator(fn => <Form onSubmit={console.log}>{() => fn()}</Form>)
    .add('Default', () => <File name="upload" label="This is a file upload" />)
    .add('Required', () => (
        <File
            name="upload"
            label="This is a file upload *"
            validate={required}
        />
    ))
