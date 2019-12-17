import i18n from '@dhis2/d2-i18n'
import { createCharacterLengthRange } from './createCharacterLengthRange'

const createMaxCharacterLength = upperBound =>
    createCharacterLengthRange(
        -Infinity,
        upperBound,
        i18n.t('Please enter a maximum of {{upperBound}} characters', {
            upperBound,
        })
    )

export { createMaxCharacterLength }
