import React from 'react'

import { storiesOf } from '@storybook/react'

import { Form, File, Conditional, clear } from '../src/index.js'
import { ManagedForm } from '../src/ManagedForm.js'

storiesOf('Conditional fields', module)
    .add('Plain form', () => (
        <Form
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
            mutators={{ clear }}
        >
            {({ onSubmit, values }) => (
                <form onSubmit={onSubmit}>
                    <File name="file1" label="File one" />

                    <Conditional
                        show={!!values.file1}
                        fieldsToClearOnHide={['file3', 'file4']}
                    >
                        <File name="file3" label="File three" />
                        <File name="file4" label="File four" />
                        <File name="file5" label="File five" />
                        <div>
                            <p>
                                Conditional blocks can contain random other
                                elements too
                            </p>
                        </div>
                    </Conditional>

                    <button type="submit">Submit</button>
                </form>
            )}
        </Form>
    ))
    .add('Managed form', () => (
        <ManagedForm
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            {({ onSubmit, values }) => (
                <React.Fragment>
                    <File name="file1" label="File one" />

                    <Conditional
                        show={!!values.file1}
                        fieldsToClearOnHide={['file3', 'file4']}
                    >
                        <File name="file3" label="File three" />
                        <File name="file4" label="File four" />
                        <File name="file5" label="File five" />
                        <div>
                            <p>
                                Conditional blocks can contain random other
                                elements too
                            </p>
                        </div>
                    </Conditional>

                    {/* <button type="submit">Submit</button> */}
                </React.Fragment>
            )}
        </ManagedForm>
    ))
