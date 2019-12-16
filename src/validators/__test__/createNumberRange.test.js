import {
    createNumberRange,
    nonNumericValueMessage,
} from '../createNumberRange.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: createNumberRange', () => {
    const betweenSixAndTen = createNumberRange(6, 10)
    const outOfBoundsMessage = 'Please enter a number between 6 and 10'

    it('should create a function', () => {
        expect(typeof betweenSixAndTen).toEqual('function')
    })

    allowsEmptyValues(betweenSixAndTen)

    describe('allows floats, integers and string representations of numbers', () => {
        testValidatorValues(betweenSixAndTen, undefined, [
            7,
            7.1,
            0.71e1,
            '7',
            '7.1',
        ])
    })

    describe('allows within-range numbers', () => {
        testValidatorValues(betweenSixAndTen, undefined, [
            6,
            8,
            10,
            9.999999,
            6.000001,
        ])
    })

    describe('rejects non-numerical values', () => {
        testValidatorValues(betweenSixAndTen, nonNumericValueMessage, [
            'test',
            true,
            {},
            [],
            () => {},
        ])
    })

    describe('rejects out-of-range numbers', () => {
        testValidatorValues(betweenSixAndTen, outOfBoundsMessage, [
            3,
            5,
            5.999999,
            10.000001,
            1000000,
        ])
    })
})
