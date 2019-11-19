import React from 'react'
import { InputField } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'

const Input = props => <FieldAdapter {...props} component={InputField} />

export { Input }
