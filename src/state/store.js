// store.js
export const createStore = (initialState, actionsFactory) => {
  const listeners = new Set();
  let _state = { ...initialState }; // This is the internal source of truth

  const notify = () => listeners.forEach(render => render());

  // FIX: The proxy target should be an empty object, 
  // and we intercept 'get' to look at the current '_state'
  const state = new Proxy({}, {
    get(_, prop) {
      return _state[prop]; // Always returns the newest value
    },
    set() {
      console.warn('Direct mutation denied.');
      return false;
    }
  });

  const actions = actionsFactory((update) => {
    _state = { ..._state, ...update }; // Update the internal object
    notify(); // Trigger the listeners
  }, () => _state);

  return { state, actions, subscribe: (fn) => listeners.add(fn) };
};

export const globalStore = createStore(
  { count: 0 },
  (commit, getState) => ({
    increment() {
      commit({ count: getState().count + 1 });
    }
  })
);