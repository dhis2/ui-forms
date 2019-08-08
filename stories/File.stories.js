import React from 'react'
import { addDecorator, storiesOf } from '@storybook/react'

import { FormWrapper } from '../.storybook/form-decorator'
import { File, required } from '../src'

addDecorator(FormWrapper)

storiesOf('File', module)
    .add('Default', () => <File name="upload" label="This is a file upload" />)
    .add('Required', () => (
        <File
            name="upload"
            label="This is a file upload *"
            validate={required}
        />
    ))
