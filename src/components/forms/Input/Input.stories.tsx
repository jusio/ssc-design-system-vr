import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Input from './Input';
import { InputProps } from './Input.types';

export default {
  title: 'components/forms/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'number', 'tel', 'email', 'password', 'date', 'url'],
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary:
            '"text" | "number" | "tel" | "email" | "password" | "date" | "url"',
        },
        defaultValue: { summary: 'text' },
      },
      description: 'Any valid HTML input type, *DO NOT USE* button like types',
    },
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    isInvalid: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} as Meta;

export const playground: Story<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = (args) => <Input {...args} aria-label="Input" />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = { type: 'text' };

export const Default: Story = () => <Input aria-label="Input" type="text" />;

export const Filled: Story = () => (
  <Input aria-label="Input" defaultValue="SecurityScorecard" type="text" />
);

export const WithPlaceholder: Story = () => (
  <Input aria-label="Input" placeholder="Company name" type="text" />
);

export const Focus: Story = () => (
  <Input aria-label="Input" className="focus" type="text" />
);

export const Invalid: Story = () => (
  <Input aria-label="Input" type="text" isInvalid />
);

export const Disabled: Story = () => (
  <Input aria-label="Input" type="text" isDisabled />
);
