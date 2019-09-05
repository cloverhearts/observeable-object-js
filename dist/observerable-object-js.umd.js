(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['dist/observerable-object-js'] = factory());
}(this, function () { 'use strict';

  var Observerable = function () {
    function Observerable() {
      this._subscribers = [];
    }

    var _proto = Observerable.prototype;

    _proto.addEventListener = function addEventListener(eventType, listener) {
      this._subscribers.push({
        type: eventType,
        listener: listener
      });
    };

    _proto.removeEventListener = function removeEventListener(eventType, listener) {
      var oldSubscribers = this._subscribers;
      this._subscribers = oldSubscribers.filter(function (subscriber) {
        return !(eventType === subscriber.type && listener === subscriber.listener);
      });
    };

    _proto.notify = function notify(eventType, data) {
      this._subscribers.filter(function (event) {
        return event;
      }).filter(function (event) {
        return event.type === eventType;
      }).forEach(function (subscriber) {
        if (subscriber.listener) {
          subscriber.listener(eventType, data);
        }
      });
    };

    return Observerable;
  }();

  return Observerable;

}));
