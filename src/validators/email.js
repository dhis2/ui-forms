import i18n from '@dhis2/d2-i18n'

const EMAIL_ADDRESS_PATTERN = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i

const invalidEmailMessage = i18n.t('Please provide a valid email address')

const email = value =>
    value && !EMAIL_ADDRESS_PATTERN.test(value)
        ? invalidEmailMessage
        : undefined

export { email, invalidEmailMessage }
