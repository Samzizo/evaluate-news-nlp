// Import the js file to test

import { checkUrl } from "../js/checkUrl";


//Describe is used to logically group the tests

describe('Test checkUrl functionality', () => {
    test('Testing the checkUrl function', () => {
        expect(checkUrl).toBeDefined()
    })

    test('checkUrl return false for invalid url', () => {
        expect(checkUrl('invalid')).toBeFalsy()
    })

    test('checkUrl return true for valid url', () => {
        expect(checkUrl('http://example.com')).toBeTruthy()
    })
})
