import React from 'react'
import { RadioGroup as UiCoreRadioGroup } from './for-ui-core/RadioGroup.js'
import { Help } from '@dhis2/ui-core'
import { FormControl } from './for-ui-core/FormControl.js'
import { fieldRenderProps } from './Field.js'

const RadioGroup = ({ input, meta, ...rest }) => {
    const error = meta.touched && meta.invalid
    const helpText = error ? meta.error : rest.helpText

    return (
        <FormControl>
            <UiCoreRadioGroup
                {...input}
                {...meta}
                {...rest}
                error={error}
                valid={rest.valid}
            />
            {helpText && (
                <Help error={error} warning={rest.warning} valid={rest.valid}>
                    {helpText}
                </Help>
            )}
        </FormControl>
    )
}

RadioGroup.propTypes = {
    ...fieldRenderProps,
    ...UiCoreRadioGroup.propTypes,
}

export { RadioGroup }
