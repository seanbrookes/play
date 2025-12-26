import { globalStore } from './state/store.js';

/**
 * @param {Function} component - A function that returns JSX/DOM based on state
 * @returns {HTMLElement} - The persistent shell element
 */
export function withState(component) {
  const shell = document.createElement('div');
  // Optional: preserve display type if needed (e.g., inline-block)
  shell.style.display = 'contents'; 

  const render = () => {
    shell.innerHTML = '';
    const content = component(globalStore.state);
    if (content instanceof Node) {
      shell.appendChild(content);
    }
  };

  // Subscribe and initial render
  globalStore.subscribe(render);
  render();

  // Automatic Cleanup
  const observer = new MutationObserver(() => {
    if (!document.body.contains(shell)) {
      globalStore?.unsubscribe?.(render);
      observer.disconnect();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });

  return shell;
}

export function h(tag, props, ...children) {

  if (typeof tag === 'function') {
    return tag({ ...props, children });
  }

  const el = document.createElement(tag);

  for (const [key, value] of Object.entries(props || {})) {
    if (key.startsWith('on') && key.toLowerCase() in window) {
      el.addEventListener(key.toLowerCase().substring(2), value);
    }
    else {
      el.setAttribute(key, value);
    }
  }

  children.flat().forEach(child => {
    if (typeof child === 'string' || typeof child === 'number') {
      el.appendChild(document.createTextNode(child));
    }
    else if (child instanceof Node) {
      el.appendChild(child);
    }

  });

  return el;
}