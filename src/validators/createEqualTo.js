import i18n from '@dhis2/d2-i18n'
import { isEmpty } from './helpers/index.js'

const createEqualTo = (key, description) => (value, formValues) =>
    isEmpty(value) || isEmpty(formValues[key]) || value === formValues[key]
        ? undefined
        : i18n.t(
              'Please make sure the value of this input matches the value in {{otherField}}.',
              { otherField: description || key }
          )

export { createEqualTo }
