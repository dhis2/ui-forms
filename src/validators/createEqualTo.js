import i18n from '@dhis2/d2-i18n'
import { isEmpty } from './helpers/index.js'

const createEqualTo = (key, description) => (value, allValues) =>
    isEmpty(value) || isEmpty(allValues[key]) || value === allValues[key]
        ? undefined
        : i18n.t(
              'Please make sure the value of this input matches the value in "{{otherField}}".',
              { otherField: description || key }
          )

export { createEqualTo }
