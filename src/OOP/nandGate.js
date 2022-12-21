"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orGate_1 = require("./orGate");
const notGate_1 = require("./notGate");
class NandGate extends orGate_1.OrGate {
    constructor(inputA, inputB) {
        super(inputA, inputB);
        this.inputA = new notGate_1.NotGate(inputA).inputA;
        this.inputB = new notGate_1.NotGate(inputB).inputA;
    }
    setNewInputs(inputA, inputB) {
        this.inputA = new notGate_1.NotGate(inputA).inputA;
        this.inputB = new notGate_1.NotGate(inputB).inputA;
    }
}
const nand = new NandGate(false, false);
console.log(nand.binaryOperation());
nand.setNewInputs(true, true);
console.log(nand.binaryOperation());
nand.setNewInputs(false, true);
console.log(nand.binaryOperation());
