// create my own events & event listeners

class MyEventEmitter {
  #listeners = {};

  // Register an event listener
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
    return this; // Enable method chaining
  }

  // Emit an event with optional arguments
  emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((fn) => {
        fn(...args);
      });
    }
    return this; // Enable method chaining
  }

  // Remove a specific listener from an event
  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (fn) => fn !== callback
      );
    }
    return this; // Enable method chaining
  }
}

const emitter = new MyEventEmitter();
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit("greet", "youssef"); // Output: Hello, youssef!
