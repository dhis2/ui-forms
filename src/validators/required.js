import i18n from '@dhis2/d2-i18n'

export const required = value => (!!value ? undefined : i18n.t('Required'))
