import React from 'react'
import { TextAreaField } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'

const TextArea = props => <FieldAdapter {...props} component={TextAreaField} />

export { TextArea }
