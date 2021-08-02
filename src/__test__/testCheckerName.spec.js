// Import the js file to test
import { checkForName } from "../client/js/nameChecker"


describe("Testing the submit functionality", () => {
    // for more info about test unit check https://jestjs.io/
    test("Testing the checkForName() function", () => {
        expect(checkForName).toBeDefined();
})});