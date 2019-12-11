import { boolean, invalidBooleanMessage } from '../boolean'
import { testValidatorValues } from './helpers/testValidatorValues'

describe('validator: boolean', () => {
    describe('allows empty values', () => {
        testValidatorValues(boolean, undefined, ['', null, undefined])
    })

    describe('allows boolean values', () => {
        testValidatorValues(boolean, undefined, [true, false])
    })

    describe('rejects non-boolean values', () => {
        testValidatorValues(boolean, invalidBooleanMessage, [
            'text',
            3,
            {},
            [],
            () => {},
        ])
    })
})
