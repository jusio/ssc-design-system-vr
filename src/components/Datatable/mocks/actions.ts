import { action } from '@storybook/addon-actions';

import { Action } from '../types/Action.types';
import { ActionKinds } from '../../../types/action.types';

export const subactionsMock: ActionKinds<string[]>[] = [
  {
    label: 'OnClick',
    name: 'onClick',
    onClick: action('onClick handler'),
  },
  {
    label: 'Absolute link',
    name: 'absolute',
    onClick: action('Absolute link handler'),
    href: '/',
  },
  {
    label: 'Relative link',
    name: 'relative',
    onClick: action('Relative link handler'),
    to: '/',
  },
];

export const actionsMock: Action<string[]>[] = [
  ...subactionsMock,
  {
    label: 'Dropdown',
    name: 'dropdown',
    onClick: action('Dropdown click'),
    subActions: subactionsMock,
  },
];

export const tableActionsMock: Action<string[]>[] = [
  {
    label: 'Export',
    name: 'Export',
    onClick: action('onBatchActionClick (export)'),
  },
  {
    label: 'Import',
    name: 'Import',
    onClick: action('onBatchActionClick (import)'),
  },
  {
    label: 'Claim',
    name: 'Claim',
    onClick: action('onBatchActionClick (claim)'),
  },
  {
    label: 'Remove',
    name: 'Remove',
    onClick: action('onBatchActionClick (remove)'),
  },
];

export const datatableRowActions = [
  {
    label: 'Detail',
    name: 'detail',
    onClick: action('onTableRowActionClick (detail)'),
  },
];

export const datatableBatchActions = [
  {
    label: 'Add assets',
    name: 'add-assets',
    onClick: action('onBatchActionClick (add assets)'),
  },
  {
    label: 'More actions',
    name: 'more-actions',
    subActions: [
      {
        label: 'Remove assets',
        name: 'remove-assets',
        onClick: action('onBatchActionClick (remove assets)'),
      },
    ],
  },
];
