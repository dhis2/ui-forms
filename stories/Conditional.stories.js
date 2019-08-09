import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import { ManagedForm, File, ConditionalFile, required } from '../src'

storiesOf('Conditional fields', module).add('Default', () => (
    <ManagedForm onSubmit={v => console.log(JSON.stringify(v, null, 2))}>
        {({ values }) => (
            <Fragment>
                <File name="file1" label="File one" />

                <ConditionalFile
                    name="file2"
                    label="File two"
                    condition={!!values.file1}
                />
            </Fragment>
        )}
    </ManagedForm>
))
