import React from 'react'
import { storiesOf } from '@storybook/react'

import { File, required } from '../src'
import { formDecorator } from './helpers/formDecorator'

storiesOf('File', module)
    .addDecorator(formDecorator)
    .add('Default', () => <File name="upload" label="This is a file upload" />)
    .add('Required', () => (
        <File
            name="upload"
            label="This is a file upload *"
            validate={required}
        />
    ))
