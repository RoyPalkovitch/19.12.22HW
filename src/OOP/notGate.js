class NotGate extends UnaryGate {
    constructor(inputA) {
        super(inputA);
        this.inputA = this.unaryOperation(inputA);
    }
    unaryOperation(inputA) {
        return !inputA;
    }
}
