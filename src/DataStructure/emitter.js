"use strict";
const Emitter = {
    eventList: {},
    subscribe: (eventType, eventFunc) => {
        var _a;
        function checkIfEventSubscribed(eventType, eventFunc) {
            var _a;
            const fillterdFunc = (_a = Emitter.eventList[eventType]) === null || _a === void 0 ? void 0 : _a.filter((event) => event.key === eventFunc)[0];
            return fillterdFunc !== undefined ? true : false;
        }
        if (!Emitter.eventList[eventType]) {
            Emitter.eventList[eventType] = [{ key: eventFunc }];
            return {
                unSubscribe: () => Emitter.unSubscribe(eventType, eventFunc),
            };
        }
        if (!checkIfEventSubscribed(eventType, eventFunc)) {
            (_a = Emitter.eventList[eventType]) === null || _a === void 0 ? void 0 : _a.push({ key: eventFunc });
            return { unSubscribe: () => Emitter.unSubscribe(eventType, eventFunc) };
        }
        return {
            unSubscribe: () => { }
        };
    },
    unSubscribe: (eventType, eventFunc) => {
        var _a;
        const filter = (_a = Emitter.eventList[eventType]) === null || _a === void 0 ? void 0 : _a.filter((eventArr) => eventArr.key !== eventFunc);
        Emitter.eventList[eventType] = filter;
        if (!Emitter.eventList[eventType]) {
            Emitter.eventList[eventType] = undefined;
        }
    },
    emit: (eventType, eventProps) => {
        var _a;
        (_a = Emitter.eventList[eventType]) === null || _a === void 0 ? void 0 : _a.forEach((event) => {
            return event.key(eventProps);
        });
    }
};
class EventEmitter {
    constructor() {
        EventEmitter.eventList = {};
    }
    subscribe(eventType, eventFunc) {
        var _a;
        if (!EventEmitter.eventList[eventType]) {
            EventEmitter.eventList[eventType] = [{ key: eventFunc }];
            return {
                unSubscribe: () => this.unSubscribe(eventType, eventFunc),
            };
        }
        if (!this.checkIfEventSubscribed(eventType, eventFunc)) {
            (_a = EventEmitter.eventList[eventType]) === null || _a === void 0 ? void 0 : _a.push({ key: eventFunc });
            return { unSubscribe: () => this.unSubscribe(eventType, eventFunc), };
        }
        return undefined;
    }
    unSubscribe(eventType, eventFunc) {
        var _a;
        EventEmitter.eventList[eventType] = (_a = EventEmitter.eventList[eventType]) === null || _a === void 0 ? void 0 : _a.filter((event) => event.key !== eventFunc);
        if (!EventEmitter.eventList[eventType]) {
            EventEmitter.eventList[eventType] = undefined;
        }
    }
    emit(eventType, eventProps) {
        var _a;
        (_a = EventEmitter.eventList[eventType]) === null || _a === void 0 ? void 0 : _a.forEach((event) => {
            return event.key(eventProps);
        });
    }
    checkIfEventSubscribed(eventType, eventFunc) {
        var _a;
        const fillterdFunc = (_a = EventEmitter.eventList[eventType]) === null || _a === void 0 ? void 0 : _a.filter((event) => event.key === eventFunc)[0];
        return fillterdFunc !== undefined ? true : false;
    }
}
const logFunc1 = (props) => {
    console.log('1' + props.key);
};
const logFunc2 = (props) => {
    console.log('2' + props.key);
};
console.log('----------Event Emitter as Class----------');
const eventEmitter = new EventEmitter();
const keydownSubscription1 = eventEmitter.subscribe('keydown', logFunc1);
const keydownSubscription2 = eventEmitter.subscribe('keydown', logFunc2);
eventEmitter.emit('keydown', { key: 'Enter' });
keydownSubscription1 === null || keydownSubscription1 === void 0 ? void 0 : keydownSubscription1.unSubscribe();
eventEmitter.emit('keydown', { key: 'Enter' });
const keydownSubscription3 = eventEmitter.subscribe('keydown', logFunc1);
const keydownSubscription4 = eventEmitter.subscribe('keydown', logFunc1);
eventEmitter.emit('keydown', { key: 'Enter' });
console.log('----------Event Emitter as Object----------');
const eventEmitter2 = Emitter.subscribe('keydown', logFunc1);
const eventEmitter3 = Emitter.subscribe('keydown', logFunc2);
Emitter.emit('keydown', { key: 'Enter' });
eventEmitter2.unSubscribe();
Emitter.emit('keydown', { key: 'Enter' });
const eventEmitter4 = Emitter.subscribe('keydown', logFunc1);
const eventEmitter5 = Emitter.subscribe('keydown', logFunc1);
Emitter.emit('keydown', { key: 'Enter' });
