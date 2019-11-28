import i18n from '@dhis2/d2-i18n'

export const requiredMessage = i18n.t('Required')
export const required = value => (value ? undefined : requiredMessage)
