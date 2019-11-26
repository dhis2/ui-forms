import React from 'react'
import { TextAreaField } from '@dhis2/ui-core'

import { normalizeProps } from './shared/helpers.js'
import { fieldRenderProps } from './Field.js'

const TextArea = props => <TextAreaField {...normalizeProps(props)} />

TextArea.propTypes = {
    ...fieldRenderProps,
    ...TextAreaField.propTypes,
}

export { TextArea }
