class Calculator {
    constructor() {

    }

    sum(x, y) {
        return x + y;
    }

    subtraction(x, y) {
        if (x > y) {
            return x - y;
        }
        return y - x;
    }
}

export default Calculator;
