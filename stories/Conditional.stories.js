import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import { ManagedForm, File } from '../src'
import { Conditional } from '../src/helper/Conditional.js'

storiesOf('Conditional fields', module).add('Default', () => (
    <ManagedForm onSubmit={v => console.log(JSON.stringify(v, null, 2))}>
        {({ values }) => (
            <Fragment>
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
                            Conditional blocks can contain random other elements
                            too
                        </p>
                    </div>
                </Conditional>
            </Fragment>
        )}
    </ManagedForm>
))
