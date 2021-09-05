import { createIcon } from './Icon';

export default {
  title: 'Basics/Icon',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => createIcon(args);

export const Icon = Template.bind({});
