// eslint-disable-next-line no-unused-vars
class CustomEventListener {
  // obj = {};

  addEventListener(event, callback) {
    // checks if event string is in our data
    // this.obj[event] = callback;
    if (event in this.obj) {
      this.obj[event][callback.name] = callback;
    } else {
      this.obj[event] = {};
      this.obj[event][callback.name] = callback;
    }
  }

  removeEventListener(event, callback) {
    // delete this.obj[event]
    if (this.obj[event] === undefined) {
      return;
    }
    delete this.obj[event][callback.name];
  }
}
