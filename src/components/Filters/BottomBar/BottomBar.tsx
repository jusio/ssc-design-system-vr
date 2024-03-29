import React from 'react';
import PropTypes from 'prop-types';

import { FlexContainer } from '../../FlexContainer';
import { Paragraph } from '../../typography';
import { Button } from '../../Button';
import { BottomBarProps } from './BottomBar.types';

const BottomBar: React.FC<BottomBarProps> = ({
  onSubmit,
  onAdd,
  onClearAll,
  onClose,
  onCancel,
  isCancelDisabled = false,
  isLoading = false,
  hasUnappliedFilters,
  isApplyDisabled = false,
}) => {
  const canCancel = !isCancelDisabled && isLoading;
  return (
    <FlexContainer justifyContent="space-between" margin={{ top: 0.5 }}>
      <FlexContainer>
        <Button
          color="primary"
          iconName="plus"
          margin={{ left: 0.5, right: 2 }}
          size="md"
          variant="text"
          onClick={onAdd}
        >
          Add
        </Button>
        <Button color="primary" size="md" variant="text" onClick={onClearAll}>
          Clear all
        </Button>
      </FlexContainer>
      <FlexContainer alignItems="center">
        {hasUnappliedFilters && (
          <Paragraph
            as="div"
            margin={{ right: 0.8, bottom: 0 }}
            size="md"
            variant="secondary"
          >
            You have unapplied filters
          </Paragraph>
        )}
        <Button
          color="primary"
          margin={{ right: 1 }}
          variant="outline"
          onClick={canCancel ? onCancel : onClose}
        >
          {canCancel ? 'Cancel' : 'Close'}
        </Button>
        <Button
          color="primary"
          isDisabled={isApplyDisabled}
          isLoading={canCancel}
          variant="solid"
          onClick={onSubmit}
        >
          Apply
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default BottomBar;

BottomBar.propTypes = {
  hasUnappliedFilters: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isCancelDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isApplyDisabled: PropTypes.bool,
};
