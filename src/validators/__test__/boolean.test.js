import { boolean, invalidBooleanMessage } from '../boolean'
import { testValidatorValues } from './testValidatorValues.js'

describe('validator: boolean', () => {
    const validInputs = ['', true, false]
    const invalidInputs = ['text', 3, {}, [], () => {}]

    testValidatorValues(validInputs, boolean, undefined)
    testValidatorValues(invalidInputs, boolean, invalidBooleanMessage)
})
