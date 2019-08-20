import React from 'react'
import { File as UiCoreFile } from './for-ui-core/File.js'
import { FormControl } from './for-ui-core/FormControl.js'
import { Help } from '@dhis2/ui-core'
import { fieldRenderProps } from './Field.js'

const File = ({ input, meta, ...rest }) => {
    const error = meta.touched && meta.invalid
    const helpText = error ? meta.error : rest.helpText

    return (
        <FormControl>
            <UiCoreFile
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

File.propTypes = {
    ...fieldRenderProps,
    ...UiCoreFile.propTypes,
}

export { File }
