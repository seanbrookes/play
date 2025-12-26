import { HelloWorld } from './HelloWorld';

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
  },
  // If your dom-runtime requires a specific global state to be initialized,
  // you can use a decorator here to mock it.
  decorators: [
    (Story) => {
      // Mocking a basic state for the withState wrapper
      // this is where you'd initialize your global state if needed
      return Story();
    },
  ],
};

export const Default = {
  args: {
    name: 'World',
  },
};

export const CustomName = {
  args: {
    name: 'Storybook 10',
  },
};