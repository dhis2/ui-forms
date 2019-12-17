import { username, invalidUsernameMessage } from '../username.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: username', () => {
    allowsEmptyValues(username)

    describe('allows all sorts of strings between 1 and 255 characters long', () => {
        testValidatorValues(username, undefined, [
            'electricchicken',
            '1', //1
            'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', //255
            'some_username^%&*(',
            'あいうえお',
        ])
    })

    describe('rejects other data types', () => {
        testValidatorValues(username, invalidUsernameMessage, [
            1,
            true,
            {},
            [],
            () => {},
        ])
    })

    describe('values that are too long', () => {
        testValidatorValues(username, invalidUsernameMessage, [
            'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', //256
        ])
    })
})
