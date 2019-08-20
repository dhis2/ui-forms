import React from 'react'
import { RadioGroup as UiCoreRadio } from './for-ui-core/RadioGroup.js'
import { fieldRenderProps } from './Field.js'

const RadioGroup = ({ input, meta, ...rest }) => (
    <UiCoreRadio
        {...input}
        {...meta}
        {...rest}
        error={meta.touched && meta.invalid}
        helpText={meta.touched && meta.invalid ? meta.error : rest.helpText}
    />
)

RadioGroup.propTypes = {
    ...fieldRenderProps,
    ...UiCoreRadio.propTypes,
}

export { RadioGroup }
