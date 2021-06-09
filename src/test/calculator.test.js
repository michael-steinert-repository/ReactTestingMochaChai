import {assert} from "chai";
import Calculator from "../calculator.js";

describe('Calculator testing', () => {
    describe('Method sum() testing', () => {
        it('should return the Sum', async () => {
            /* Given | Arrange */
            const x = 41;
            const y = 1;
            const calculator = new Calculator();
            /* When | Act */
            const result = calculator.sum(x, y);

            /* That | Assert */
            assert.equal(result, 42);
        });
    });
    describe('Method sub() testing', () => {
        it('should return the Subtraction', async () => {
            /* Given | Arrange */
            const x = 41;
            const y = 1;
            const calculator = new Calculator();
            /* When | Act */
            const result = calculator.subtraction(x, y);

            /* That | Assert */
            assert.equal(result, 40);
        });
    });
});