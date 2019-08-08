import i18n from '@dhis2/d2-i18n'

export const emailPattern = /^.+@.+\.[a-zA-Z]+$/
export const invalidEmailMessage = i18n.t('Not a valid e-mail')
export const validEmail = value =>
    emailPattern.test(value) ? undefined : invalidEmailMessage
