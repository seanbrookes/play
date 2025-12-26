// import { h } from './dom-runtime.js';
import { globalStore } from './state/store';
import { HelloWorld } from "./components/HelloWorld/HelloWorld";

export const Main = () => {
  const handleClick = () => {
    globalStore.actions.increment();
  }

  return (
    <div class="container">
      <h1>Hello Vite!</h1>
      <div>
        <img src="ffs_logo.svg" height="16" />
        <img src="ffs_logo.svg" height="32" />
        <img src="ffs_logo.svg" height="64" />
        <img src="ffs_logo.svg" height="96" />
        <img src="ffs_logo.svg" height="128" />
        <img src="ffs_logo.svg" height="256" />
        <img src="ffs_logo.svg" height="128" />
        <img src="ffs_logo.svg" height="96" />
        <img src="ffs_logo.svg" height="64" />
        <img src="ffs_logo.svg" height="32" />
        <img src="ffs_logo.svg" height="16" />
      </div>
      <button data-id="initial-increment-button" onclick={handleClick}>Click Me</button>
      <HelloWorld data-id="hello-1" name="sean" />
      <HelloWorld data-id="hello-2" name="world" />
    </div>
  );
};