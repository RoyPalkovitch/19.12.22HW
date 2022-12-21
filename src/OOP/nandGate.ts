import { OrGate } from "./orGate";
import { NotGate } from "./notGate";

class NandGate extends OrGate {

  constructor(inputA: boolean, inputB: boolean) {
    super(inputA, inputB);
    this.inputA = new NotGate(inputA).inputA;
    this.inputB = new NotGate(inputB).inputA;
  }

  setNewInputs(inputA: boolean, inputB: boolean) {
    this.inputA = new NotGate(inputA).inputA;
    this.inputB = new NotGate(inputB).inputA;
  }


}

const nand = new NandGate(false, false);
console.log(nand.binaryOperation());
nand.setNewInputs(true, true);
console.log(nand.binaryOperation());
nand.setNewInputs(false, true);
console.log(nand.binaryOperation());
