import React from 'react'
import propTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import {
    FileInputField as UiCoreFileInputField,
    FileListItem,
} from '@dhis2/ui-core'
import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

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

const createChangeHandler = (currentFiles, multifile, onChange) => ({
    files,
}) => {
    // A JavaScript FileList instance is read-only, so we cannot add files to it
    // FileList also doesn't have a .map method so by destructuring the FileList
    // instance into an array we can add, remove and map
    const value = multifile ? dedupeAndConcat(currentFiles, files) : [...files]

    onChange({ value })
}

const createRemoveHandler = (currentFiles, fileToDelete, onChange) => () => {
    const files = currentFiles.filter(file => file !== fileToDelete)
    const value = files.length > 0 ? files : ''

    onChange({ value })
}

const FileInputComponent = ({
    className,
    label,
    buttonLabel,
    required,
    disabled,
    error,
    warning,
    valid,
    helpText,
    multifile,
    small,
    large,
    accept,
    value,
    validationText,
    tabIndex,
    placeholder,
    onChange,
}) => (
    <UiCoreFileInputField
        className={className}
        onChange={createChangeHandler(value, multifile, onChange)}
        label={label}
        buttonLabel={buttonLabel || multifile ? btnLabelMulti : btnLabel}
        error={error}
        valid={valid}
        warning={warning}
        small={small}
        large={large}
        required={required}
        disabled={disabled || (!multifile && value.length >= 1)}
        accept={accept}
        multiple={multifile}
        name={name}
        helpText={helpText}
        validationText={validationText}
        tabIndex={tabIndex}
        placeholder={placeholder}
    >
        {Array.isArray(value)
            ? value.map(file => (
                  <FileListItem
                      key={file.name}
                      label={file.name}
                      onRemove={createRemoveHandler(value, file, onChange)}
                      removeText={i18n.t('Remove')}
                  />
              ))
            : undefined}
    </UiCoreFileInputField>
)

FileInputComponent.defaultProps = {
    placeholder: i18n.t('No file(s) selected yet'),
}

FileInputComponent.propTypes = {
    ...adapterComponentProps,
    accept: propTypes.string,
    buttonLabel: propTypes.string,
    small: propTypes.bool,
    large: propTypes.bool,
    multifile: propTypes.bool,
    value: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.instanceOf(File)),
        propTypes.oneOf(['']),
    ]),
    placeholder: propTypes.string,
}

const FileInput = props => (
    <FieldAdapter {...props} component={FileInputComponent} />
)

export { FileInput }
