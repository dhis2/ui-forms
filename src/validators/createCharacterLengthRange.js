import i18n from '@dhis2/d2-i18n'
import { isEmpty, isString } from './helpers/index.js'

const createCharacterLengthRange = (lowerBound, upperBound) => value =>
    isEmpty(value) ||
    (isString(value) &&
        value.length >= lowerBound &&
        value.length <= upperBound)
        ? undefined
        : i18n.t(
              'Please enter between {{lowerBound}} and {{upperBound}} characters',
              { lowerBound, upperBound }
          )

export { createCharacterLengthRange }
