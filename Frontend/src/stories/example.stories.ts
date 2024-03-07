import type { Meta, StoryObj } from '@storybook/react';

import { Example } from '../Components/Example';

export default {
  title: 'Example',
  component: Example,
  tags: ['autodocs'],
} as Meta<typeof Example>;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    textExample: 'Texto de ejemplo',
    handleClick: () => {alert('hello example')}
  },
};
