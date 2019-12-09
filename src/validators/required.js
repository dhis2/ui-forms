import i18n from '@dhis2/d2-i18n'

const requiredMessage = i18n.t('Required')

const required = value =>
    typeof value === 'undefined' || value === null || value === ''
        ? requiredMessage
        : undefined

export { required, requiredMessage }
