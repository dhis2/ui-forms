import React from 'react'

import { storiesOf } from '@storybook/react'

import { Form, File, Conditional, clear } from '../src/index.js'

storiesOf('Conditional fields', module).add('Default', () => (
    <Form onSubmit={v => console.log(v)} mutators={{ clear }}>
        {({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
                <File name="file1" label="File one" />

                <Conditional
                    show={!!values.file1}
                    fieldsToClearOnHide={['file2', 'file3']}
                >
                    <File name="file2" label="File two - cleared on hide" />
                    <File name="file3" label="File three - cleared on hide" />
                    <File name="file4" label="File four - not cleared" />
                    <div>
                        <p>
                            Conditional blocks can contain random other elements
                            too
                        </p>
                    </div>
                </Conditional>

                <button type="submit">Submit</button>
            </form>
        )}
    </Form>
))
