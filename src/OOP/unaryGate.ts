import { IGate } from "./iGate";

export abstract class UnaryGate implements IGate {
  inputA: boolean;
  inputB: boolean | null;
  constructor(inputA: boolean) {
    this.inputA = inputA;
    this.inputB = null;
  }

  abstract unaryOperation(inputA: boolean): boolean;
}