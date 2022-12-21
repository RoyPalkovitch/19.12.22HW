type EmiterType = {
  eventList: { [eventType: string]: { key: Function }[] | undefined },
  subscribe: Function,
  emit: Function,
  unSubscribe: Function
}


const Emitter: EmiterType = {
  eventList: {},
  subscribe: (eventType: string, eventFunc: Function): { unSubscribe: Function } | undefined => {

    function checkIfEventSubscribed(eventType: string, eventFunc: Function): boolean {
      const fillterdFunc: { key: Function } | undefined = Emitter.eventList[eventType]?.filter((event: { key: Function }) => event.key === eventFunc)[0];

      return fillterdFunc !== undefined ? true : false;
    }

    if (!Emitter.eventList[eventType]) {
      Emitter.eventList[eventType] = [{ key: eventFunc }];
      return {
        unSubscribe: () => Emitter.unSubscribe(eventType, eventFunc),
      }
    }

    if (!checkIfEventSubscribed(eventType, eventFunc)) {
      Emitter.eventList[eventType]?.push({ key: eventFunc });
      return { unSubscribe: () => Emitter.unSubscribe(eventType, eventFunc) }
    }

    return {
      unSubscribe: () => { }
    }
  },
  unSubscribe: (eventType: string, eventFunc: Function) => {
    const filter = Emitter.eventList[eventType]?.filter((eventArr) => eventArr.key !== eventFunc);
    Emitter.eventList[eventType] = filter
    if (!Emitter.eventList[eventType]) {
      Emitter.eventList[eventType] = undefined;
    }
  },
  emit: (eventType: string, eventProps: {}) => {
    Emitter.eventList[eventType]?.forEach((event: { key: Function }) => {
      return event.key(eventProps);
    });
  }

} as const


class EventEmitter {
  private static eventList: { [eventType: string]: { key: Function }[] | undefined };
  constructor() {
    EventEmitter.eventList = {};
  }

  subscribe(eventType: string, eventFunc: Function): { unSubscribe: Function } | undefined {
    if (!EventEmitter.eventList[eventType]) {
      EventEmitter.eventList[eventType] = [{ key: eventFunc }];
      return {
        unSubscribe: () => this.unSubscribe(eventType, eventFunc),
      }
    }

    if (!this.checkIfEventSubscribed(eventType, eventFunc)) {
      EventEmitter.eventList[eventType]?.push({ key: eventFunc });
      return { unSubscribe: () => this.unSubscribe(eventType, eventFunc), }
    }

    return undefined;
  }

  private unSubscribe(eventType: string, eventFunc: Function): void {
    EventEmitter.eventList[eventType] = EventEmitter.eventList[eventType]?.filter((event: { key: Function }) => event.key !== eventFunc);
    if (!EventEmitter.eventList[eventType]) {
      EventEmitter.eventList[eventType] = undefined;
    }
  }

  emit(eventType: string, eventProps: {}): Function | void {

    EventEmitter.eventList[eventType]?.forEach((event: { key: Function }) => {
      return event.key(eventProps);
    });
  }

  private checkIfEventSubscribed(eventType: string, eventFunc: Function): boolean {
    const fillterdFunc: { key: Function } | undefined = EventEmitter.eventList[eventType]?.filter((event: { key: Function }) => event.key === eventFunc)[0];

    return fillterdFunc !== undefined ? true : false;
  }


}


const logFunc1 = (props: { key: string; }): void => {
  console.log('1' + props.key);
}

const logFunc2 = (props: { key: string; }): void => {
  console.log('2' + props.key);
}
console.log('----------Event Emitter as Class----------');

const eventEmitter: EventEmitter = new EventEmitter();

const keydownSubscription1 = eventEmitter.subscribe('keydown', logFunc1);
const keydownSubscription2 = eventEmitter.subscribe('keydown', logFunc2);

eventEmitter.emit('keydown', { key: 'Enter' });
keydownSubscription1?.unSubscribe();
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
