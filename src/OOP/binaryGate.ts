import { IGate } from "./iGate";
export abstract class BinaryGate implements IGate {
  inputA: boolean;
  inputB: boolean;
  constructor(inputA: boolean, inputB: boolean) {
    this.inputA = inputA;
    this.inputB = inputB;
  }

  abstract binaryOperation(): boolean;


}