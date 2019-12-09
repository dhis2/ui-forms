import i18n from '@dhis2/d2-i18n'
import { isEmpty } from './helpers/isEmpty.js'

const requiredMessage = i18n.t('This is a required field')

const required = value => (isEmpty(value) ? requiredMessage : undefined)

export { required, requiredMessage }
