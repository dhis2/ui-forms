import { alphaNumeric, invalidAlphaNumericMessage } from '../alphaNumeric.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: alphaNumeric', () => {
    allowsEmptyValues(alphaNumeric)

    describe('allows alpha-numeric values', () => {
        testValidatorValues(alphaNumeric, undefined, [
            '123456',
            'abcdef',
            'a1b2c3',
            'A1B2C3d4e5',
        ])
    })

    describe('rejects non-alpha-numeric values', () => {
        testValidatorValues(alphaNumeric, invalidAlphaNumericMessage, [
            '.,/|~',
            'I have spaces',
            true,
            false,
            0,
            1,
        ])
    })
})
