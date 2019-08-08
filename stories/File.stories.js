import React from 'react'

import { storiesOf } from '@storybook/react'

import { File, required } from '../src'

storiesOf('File', module)
    .add('Default', () => <File name="upload" label="This is a file upload" />)
    .add('Required', () => (
        <File
            name="upload"
            label="This is a file upload *"
            validate={required}
        />
    ))
