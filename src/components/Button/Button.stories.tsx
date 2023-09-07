import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Button } from './Button.component';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    backgroundType: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'click aqui'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const primary: Story = {
  render: (props) => <Button {...props}>{props.children || 'botão'}</Button>,
};

export const secondary: Story = {
  render: (props) => <Button backgroundType='secondary' {...props}>{props.children || 'botão'}</Button>,
};