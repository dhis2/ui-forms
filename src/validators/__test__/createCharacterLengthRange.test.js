import { createCharacterLengthRange } from '../createCharacterLengthRange.js'
import { testValidatorValues } from './helpers/testValidatorValues.js'

describe('validator: boolean', () => {
    const betweenSixAndTenChars = createCharacterLengthRange(6, 10)
    const inValidMsg = 'Please enter between 6 and 10 characters'

    it('should create a function', () => {
        expect(typeof betweenSixAndTenChars).toEqual('function')
    })

    describe('allows empty values', () => {
        testValidatorValues(betweenSixAndTenChars, undefined, [
            '',
            null,
            undefined,
        ])
    })

    describe('allows within-range strings', () => {
        testValidatorValues(betweenSixAndTenChars, undefined, [
            'abcdef', // 6
            'abcdefgh',
            'abcdefghij', // 10
        ])
    })

    describe('rejects non-string values', () => {
        testValidatorValues(betweenSixAndTenChars, inValidMsg, [
            true,
            3,
            {},
            [],
            () => {},
        ])
    })

    describe('rejects out-of-range strings', () => {
        testValidatorValues(betweenSixAndTenChars, inValidMsg, [
            'a',
            'abcde', // 5
            'abcdefghijk', // 11
            'abcdefghijklmnopqrstuvw',
        ])
    })
})
