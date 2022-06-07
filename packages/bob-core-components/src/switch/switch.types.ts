import React from 'react';

type Toggle = 'on' | 'off';

export interface IProps {
  disabled?: boolean;
  className?: string;
  onChange?: (value: Toggle, event: React.SyntheticEvent) => void;
  value?: Toggle
  defaultValue?: Toggle
}
