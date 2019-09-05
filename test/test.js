const Observer = require('../dist/observerable-object-js');
const assert = require('assert');

assert(Observer, 'cannot found observer object.');
const observer = new Observer();
assert(observer.addEventListener, 'cannot found addEventListener method.');
assert(observer.removeEventListener,
  'cannot found removeEventListener method.');
assert(observer.notify, 'cannot found notify method.');

const testEventListenr = (event, name) => {
  console.log(`Hello, ${name}`);
};
observer.addEventListener('TEST-EVENT', testEventListenr);

const newEventListener = (event, name) => {
  console.log(`This is New Event of , ${name}`);
};
observer.addEventListener('NEW-EVENT', newEventListener);

observer.notify('TEST-EVENT', 'CloverHearts');
observer.notify('NEW-EVENT', 'Library');

observer.removeEventListener('NEW-EVENT', newEventListener);

observer.notify('TEST-EVENT', 'CloverHearts');
observer.notify('NEW-EVENT', 'MUTED');

console.log('Tested!');
