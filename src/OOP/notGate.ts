
class NotGate extends UnaryGate {

  constructor(inputA: boolean) {
    super(inputA);
    this.inputA = this.unaryOperation(inputA);
  }

  unaryOperation(inputA: boolean): boolean {
    return !inputA;
  }
}
