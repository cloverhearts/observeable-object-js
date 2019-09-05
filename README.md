# observeable-object-js

Simple Observe with Javascript object.

```
const Observer = require("observerable-object-js");

const observer = new Observer();

// case. register event
const testEventListenr = (event, name) => {
  console.log(`Hello, ${name}`);
};
observer.addEventListener("TEST-EVENT", testEventListenr);

const newEventListener = (event, name) => {
  console.log(`This is New Event of , ${name}`);
};
observer.addEventListener("NEW-EVENT", newEventListener);

// case. broadcast event
observer.notify("TEST-EVENT", "CloverHearts");
observer.notify("NEW-EVENT", "Library");

// case. delete event
observer.removeEventListener("TEST-EVENT", newEventListener);
observer.removeEventListener("NEW-EVENT", newEventListener);

```
