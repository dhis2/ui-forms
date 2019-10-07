import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import {
    FileInputField as UiCoreFileInputField,
    FileListItem,
} from '@dhis2/ui-core'
import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const btnLabel = i18n.t('Upload file')
const btnLabelMulti = i18n.t('Upload files')

class FileInput extends PureComponent {
    onFileInputChange = fileList => {
        const { multifile, onChange } = this.props
        // A JavaScript FileList instance is read-only, so we cannot add files to it
        // FileList also doesn't have a .map method so by destructuring the FileList
        // instance into an array we can add, remove and map
        const files = multifile ? this.dedupeAndConcat(fileList) : [...fileList]

        onChange(files)
    }

    // This deduplicates the file array based on file name
    // and keeps the most recent version of the found duplicate
    dedupeAndConcat(fileList) {
        const reversedNewFileArray = [...fileList].reverse()
        return [...reversedNewFileArray, ...this.props.value].reduce(
            (acc, file) => {
                if (!acc.unique.has(file.name)) {
                    acc.unique.add(file.name)
                    acc.files.push(file)
                }
                return acc
            },
            { files: [], unique: new Set() }
        ).files
    }

    onFileRemove(fileToDelete) {
        const { value, onChange } = this.props
        const files = value.filter(file => file !== fileToDelete)

        onChange(files.length > 0 ? files : null)
    }

    render() {
        const {
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
        } = this.props

        return (
            <UiCoreFileInputField
                className={className}
                onChange={this.onFileInputChange}
                label={label}
                buttonLabel={
                    buttonLabel || multifile ? btnLabelMulti : btnLabel
                }
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
                {value &&
                    value.map(file => (
                        <FileListItem
                            key={file.name}
                            label={file.name}
                            onRemove={this.onFileRemove.bind(this, file)}
                            removeText={i18n.t('Remove')}
                        />
                    ))}
            </UiCoreFileInputField>
        )
    }
}

FileInput.defaultProps = {
    placeholder: i18n.t('No file(s) selected yet'),
}

FileInput.propTypes = {
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

const FileInputAdapter = props => (
    <FieldAdapter {...props} component={FileInput} />
)

export { FileInputAdapter, FileInput }
