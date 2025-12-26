import { withState } from '../../dom-runtime';
import { globalStore } from '../../state/store';

export function HelloWorld({ name = 'world' }) {
  const handleClick = () => {
    globalStore.actions.increment();
  }
  // We wrap the return in withState
  return withState((state) => (
    <div class="hello-card">
      <p>Hello {name}!</p>
      <strong>Global Count: {state.count}</strong>
      <button data-id="nested-increment-button" onclick={handleClick}>Click Me</button>
    </div>
  ));
}