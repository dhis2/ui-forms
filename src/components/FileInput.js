import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import { FileInput as UiCoreFileInput, Help, Field } from '@dhis2/ui-core'
import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const messages = {
    uploadFile: i18n.t('Upload file'),
    uploadFiles: i18n.t('Upload files'),
}

class FileInput extends PureComponent {
    onFileInputChange = fileList => {
        const { multiple, value, onChange } = this.props
        // A JavaScript FileList instance is read-only, so we cannot add files to it
        // FileList also doesn't have a .map method so by destructuring the FileList
        // instance into an array we can add, remove and map
        const files = multiple ? [...value, ...fileList] : [...fileList]

        onChange(files)
    }

    onFileRemove(fileToDelete) {
        const { value, onChange } = this.props
        const files = value.filter(file => file !== fileToDelete)

        onChange(files.length > 0 ? files : null)
    }

    getButtonLabel() {
        return this.props.buttonLabel || this.props.multiple
            ? messages.uploadFiles
            : messages.uploadFile
    }

    getDisabled() {
        return (
            this.props.disabled ||
            (!this.props.multiple && this.props.value.length >= 1)
        )
    }

    render() {
        const {
            className,
            label,
            required,
            error,
            warning,
            valid,
            helpText,
            errorText,
            multiple,
            small,
            large,
            accept,
            value,
        } = this.props

        return (
            <Field className={className}>
                <UiCoreFileInput
                    onChange={this.onFileInputChange}
                    label={label}
                    buttonLabel={this.getButtonLabel()}
                    error={error}
                    valid={valid}
                    warning={warning}
                    small={small}
                    large={large}
                    required={required}
                    disabled={this.getDisabled()}
                    accept={accept}
                    multiple={multiple}
                >
                    {helpText && <Help>{helpText}</Help>}

                    {error && errorText && <Help error>{errorText}</Help>}

                    <UiCoreFileInput.FileList>
                        {!value && (
                            <UiCoreFileInput.Placeholder>
                                {i18n.t('No file(s) selected yet')}
                            </UiCoreFileInput.Placeholder>
                        )}

                        {value &&
                            value.map(file => (
                                <UiCoreFileInput.FileListItem
                                    key={file.name}
                                    label={file.name}
                                    onRemove={this.onFileRemove.bind(
                                        this,
                                        file
                                    )}
                                    removeText={i18n.t('Remove')}
                                />
                            ))}
                    </UiCoreFileInput.FileList>
                </UiCoreFileInput>
            </Field>
        )
    }
}

FileInput.propTypes = {
    ...adapterComponentProps,
    accept: propTypes.string,
    buttonLabel: propTypes.string,
    small: propTypes.bool,
    large: propTypes.bool,
    multiple: propTypes.bool,
    value: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.instanceOf(File)),
        propTypes.oneOf(['']),
    ]),
}

const FileInputAdapter = props => (
    <FieldAdapter {...props} component={FileInput} />
)

export { FileInputAdapter, FileInput }
