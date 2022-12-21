"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotGate = void 0;
const unaryGate_1 = require("./unaryGate");
class NotGate extends unaryGate_1.UnaryGate {
    constructor(inputA) {
        super(inputA);
        this.inputA = this.unaryOperation(inputA);
    }
    unaryOperation(inputA) {
        return !inputA;
    }
}
exports.NotGate = NotGate;
