class NandGate extends AndGate {
    constructor(inputA, inputB) {
        super(inputA, inputB);
        this.inputA = new NotGate(inputA).inputA;
        this.inputB = new NotGate(inputB).inputA;
    }
}
