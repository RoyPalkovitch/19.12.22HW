class AndGate extends BinaryGate {

  constructor(inputA: boolean, inputB: boolean) {
    super(inputA, inputB);
    this.inputA = inputA;
    this.inputB = inputB;
  }

  binaryOperation(): boolean {
    return this.inputA && this.inputB;
  }
}
