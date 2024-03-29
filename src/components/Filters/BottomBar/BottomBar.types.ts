export interface BottomBarProps {
  onAdd: (event: React.MouseEvent<HTMLElement>) => void;
  onClearAll: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  onCancel: (event: React.MouseEvent<HTMLElement>) => void;
  onSubmit: (event: React.MouseEvent<HTMLElement>) => void;
  hasUnappliedFilters: boolean;
  isLoading?: boolean;
  isCancelDisabled?: boolean;
  isApplyDisabled?: boolean;
}
