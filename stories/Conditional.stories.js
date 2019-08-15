import React from 'react'

import { storiesOf } from '@storybook/react'

import { File, Conditional, clear } from '../src/index.js'
import { createFormDecorator } from './helpers/formDecorator.js'

storiesOf('Conditional fields', module)
    .addDecorator(createFormDecorator({ mutators: { clear } }))
    .add('Default', ({ formProps }) => (
        <>
            <File name="file1" label="File one" />

            <Conditional
                show={!!formProps.values.file1}
                fieldsToClearOnHide={['file2', 'file3']}
            >
                <File name="file2" label="File two - cleared on hide" />
                <File name="file3" label="File three - cleared on hide" />
                <File name="file4" label="File four - not cleared" />
                <div>
                    <p>
                        Conditional blocks can contain random other elements too
                    </p>
                </div>
            </Conditional>
        </>
    ))
