/*
Babel Polyfill adds support to the web browsers for features, 
which are not available.
*/ 
import 'babel-polyfill'
// Import the js file to test
import { handleSubmit } from '../client/js/formHandler'

/*
Describe is used to logically group the tests
*/
describe('Testing the submit functionality', () => {
  // for more info about test unit check https://jestjs.io/
  test('Testing the handleSubmit() function', () => {
    expect(handleSubmit).toBeDefined()
  })
})
