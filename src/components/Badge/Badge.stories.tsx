import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Badge from './Badge';
import { BadgeProps } from './Badge.types';
import { BadgeSizes } from './Badge.enums';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Badge',
  component: Badge,
  argTypes: {
    size: {
      ...generateControl('select', BadgeSizes),
    },
  },
} as Meta;

export const playground: Story<BadgeProps> = (args) => <Badge {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = {
  count: 25,
  size: BadgeSizes.md,
};

export const SimpleBadge: Story = () => <Badge count={25} />;
SimpleBadge.storyName = 'Simple Badge';

export const BadgeWithHighCount: Story = () => <Badge count={120} />;
BadgeWithHighCount.storyName = 'Badge With High Count';
