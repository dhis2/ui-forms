import React from 'react'
import propTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { FileInputField, FileListItem } from '@dhis2/ui-core'

import { normalizeProps } from './shared/helpers.js'
import { fieldRenderProps } from './shared/propTypes.js'

const btnLabel = i18n.t('Upload file')
const btnLabelMulti = i18n.t('Upload files')

const dedupeAndConcat = (currentFiles, newFileList) => {
    return [...currentFiles, ...newFileList].reduceRight(
        (acc, file) => {
            if (!acc.unique.has(file.name)) {
                acc.unique.add(file.name)
                acc.files.unshift(file)
            }
            return acc
        },
        { files: [], unique: new Set() }
    ).files
}

const createChangeHandler = ({ multifile, input }) => ({ files }) => {
    // A JavaScript FileList instance is read-only, so we cannot add files to it
    // FileList also doesn't have a .map method so by destructuring the FileList
    // instance into an array we can add, remove and map
    const currentFiles = Array.isArray(input.value) ? input.value : []
    const value = multifile ? dedupeAndConcat(currentFiles, files) : [...files]

    input.onChange(value)
}

const createRemoveHandler = ({ input }, fileToDelete) => () => {
    const files = input.value.filter(file => file !== fileToDelete)
    const value = files.length > 0 ? files : ''

    input.onChange(value)
}

const FileInput = props => {
    const {
        buttonLabel,
        multifile,
        disabled,
        value,
        onChange,
        ...rest
    } = normalizeProps(props, createChangeHandler(props))
    const renderFiles = value || []

    return (
        <FileInputField
            onChange={onChange}
            buttonLabel={buttonLabel || multifile ? btnLabelMulti : btnLabel}
            disabled={disabled || (!multifile && value.length >= 1)}
            multiple={multifile}
            name={name}
            {...rest}
        >
            {renderFiles.map(file => (
                <FileListItem
                    key={file.name}
                    label={file.name}
                    onRemove={createRemoveHandler(props, file)}
                    removeText={i18n.t('Remove')}
                />
            ))}
        </FileInputField>
    )
}

FileInput.defaultProps = {
    placeholder: i18n.t('No file(s) selected yet'),
}

FileInput.propTypes = {
    ...fieldRenderProps,
    ...FileInputField.propTypes,
    value: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.instanceOf(File)),
        propTypes.oneOf(['']),
    ]),
}

export { FileInput }
