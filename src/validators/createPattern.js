import i18n from '@dhis2/d2-i18n'
import { isEmpty, isString } from './helpers/index.js'

const createPattern = (pattern, message) => value =>
    isEmpty(value) || (isString(value) && pattern.test(value))
        ? undefined
        : message ||
          i18n.t(
              'Please make sure the value of this input matches the pattern {{patternString}}.',
              { patternString: pattern.toString() }
          )

export { createPattern }
