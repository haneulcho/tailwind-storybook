import { createBody } from './Body';

export default {
  title: 'Layout/Body',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => createBody(args);

export const Body = Template.bind({});
