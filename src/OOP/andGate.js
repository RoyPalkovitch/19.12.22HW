"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndGate = void 0;
const binaryGate_1 = require("./binaryGate");
class AndGate extends binaryGate_1.BinaryGate {
    constructor(inputA, inputB) {
        super(inputA, inputB);
        this.inputA = inputA;
        this.inputB = inputB;
    }
    binaryOperation() {
        return this.inputA && this.inputB;
    }
}
exports.AndGate = AndGate;
