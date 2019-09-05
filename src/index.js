export default class Observerable {
  constructor() {
    this._subscribers = [];
  }

  addEventListener(eventType, listener) {
    this._subscribers.push({type: eventType, listener});
  }

  removeEventListener(eventType, listener) {
    const oldSubscribers = this._subscribers;
    this._subscribers = oldSubscribers.filter(subscriber => {
      return !(eventType === subscriber.type && listener ===
        subscriber.listener);
    });
  }

  notify(eventType, data) {
    this._subscribers.filter(event => event).
      filter(event => event.type === eventType).
      forEach(subscriber => {
        if (subscriber.listener) {
          subscriber.listener(eventType, data);
        }
      });
  }
}
