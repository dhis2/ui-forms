import React from 'react'
import { InputField } from '@dhis2/ui-core'

import { normalizeProps } from './shared/helpers.js'
import { fieldRenderProps } from './shared/propTypes.js'

const Input = props => <InputField {...normalizeProps(props)} />

Input.propTypes = {
    ...fieldRenderProps,
    ...InputField.propTypes,
}

export { Input }
