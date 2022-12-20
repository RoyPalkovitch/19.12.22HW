abstract class UnaryGate implements IGate {
  inputA: boolean;
  inputB: boolean | null;
  operation: Function;
  constructor(inputA: boolean) {
    this.inputA = inputA;
  }

  abstract unaryOperation(inputA: boolean): boolean;
}