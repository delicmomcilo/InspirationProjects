import { IProps as CheckboxProps } from '../input/input.types';

export interface IProps {
  className?: string;
  title: string;
  checkboxes: Array<CheckboxProps>;
}
