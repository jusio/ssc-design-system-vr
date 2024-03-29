import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Filters from '../../Filters';
import { FlexContainer } from '../../../FlexContainer';
import {
  fieldsInput,
  fieldsInputMaxLength,
  fieldsInputPlaceholderUnits,
  fieldsValidateDomainsExternal,
  fieldsValidateIPsExternal,
} from '../../mocks/options';

export default {
  component: Filters,
  title: 'components/Filters/components/Input',
} as Meta;

export const Input: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsInput}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const InputValidationMaxLength: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsInputMaxLength}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const ExternalValidationDomain: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsValidateDomainsExternal}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const ExternalValidationIps: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsValidateIPsExternal}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const InputPlaceholderUnits: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsInputPlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
