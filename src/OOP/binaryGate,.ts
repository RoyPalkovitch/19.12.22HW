
abstract class BinaryGate implements IGate {
  inputA: boolean;
  inputB: boolean;
  operation: Function;
  constructor(inputA: boolean, inputB: boolean) {
    this.inputA = inputA;
    this.inputB = inputB;
  }

  abstract binaryOperation(): boolean;


}