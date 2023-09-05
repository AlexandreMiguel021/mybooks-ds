import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button } from './Button.component';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  render: () => <Button  />,
};