import React from 'react'

import { storiesOf } from '@storybook/react'

import { File, Field, RadioGroup, Conditional, clear } from '../src/index.js'
import { createFormDecorator } from './helpers/formDecorator.js'

storiesOf('Conditional fields', module)
    .addDecorator(createFormDecorator({ mutators: { clear } }))
    .add('Default', ({ formRenderProps }) => (
        <>
            <Field
                name="upload"
                label="Would you like to upload a file"
                component={RadioGroup}
                options={[
                    { label: 'Yes', value: true },
                    { label: 'No', value: false },
                ]}
                type="select"
                parse={value => value === 'true'}
            />

            <Conditional
                show={!!formRenderProps.values.upload}
                fieldsToClearOnHide={['file1', 'file2']}
            >
                <Field
                    component={File}
                    type="file"
                    name="file1"
                    label="File one - cleared on hide"
                />
                <Field
                    component={File}
                    type="file"
                    name="file2"
                    label="File two - cleared on hide"
                />
                <Field
                    component={File}
                    type="file"
                    name="file3"
                    label="File three - not cleared"
                />
                <div>
                    <p>
                        Conditional blocks can contain random other elements too
                    </p>
                </div>
            </Conditional>
        </>
    ))
