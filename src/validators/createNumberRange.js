import i18n from '@dhis2/d2-i18n'
import { isEmpty, isNumeric, toNumber } from './helpers/index.js'

const nonNumericValueMessage = i18n.t('Please enter numerical values')

const createNumberRange = (lowerBound, upperBound) => value => {
    if (isEmpty(value)) {
        return undefined
    }

    if (!isNumeric(value)) {
        return nonNumericValueMessage
    }

    const valueAsNumber = toNumber(value)

    return valueAsNumber >= lowerBound && valueAsNumber <= upperBound
        ? undefined
        : i18n.t(
              'Please enter a number between {{lowerBound}} and {{upperBound}}',
              { lowerBound, upperBound }
          )
}

export { createNumberRange, nonNumericValueMessage }
