class AndGate extends BinaryGate {
    constructor(inputA, inputB) {
        super(inputA, inputB);
        this.inputA = inputA;
        this.inputB = inputB;
    }
    binaryOperation() {
        return this.inputA && this.inputB;
    }
}
