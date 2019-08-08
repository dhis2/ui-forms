import React from 'react'

import { storiesOf } from '@storybook/react'

import { File, Form, required } from '../src'

storiesOf('Conditional fields', module).add('Default', () => (
    <Form onSubmit={v => console.log(JSON.stringify(v, null, 2))}>
        {({ handleSubmit, values }) => (
            <form data-test onSubmit={handleSubmit}>
                <File name="file1" label="File one" />

                <File
                    name="file2"
                    label="File two"
                    condition={!!values.file1}
                />
            </form>
        )}
    </Form>
))
