import i18n from '@dhis2/d2-i18n'

const ALPHA_NUMERIC_PATTERN = /^[a-z0-9]*$/i

const invalidAlphaNumericMessage = i18n.t(
    'Please provide an alpha-numeric value'
)

const alphaNumeric = value =>
    value && !ALPHA_NUMERIC_PATTERN.test(value)
        ? invalidAlphaNumericMessage
        : undefined

export { alphaNumeric, invalidAlphaNumericMessage }
