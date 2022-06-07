import {IProps as IInputProps} from '../input/input.types';
import {IProps as ISelectListProps} from '../selectList/selectList.types';
import { MotionProps } from 'framer-motion';

export interface AnimationProps extends MotionProps {
  open: boolean
  disabled?: boolean
}

export type Option = string | { [key: string]: any};

export interface IProps {
  getOptionLabel?: (o: Option) => string,
  getEmptyListLabel?: () => string,
  getEmptyListComponent?: () => JSX.Element,
  options: Array<Option>
  onChange?: (inputValue: string, value?: Option | null, ) => void,
  inputProps?: Partial<IInputProps>,
  selectListProps?: Partial<ISelectListProps>
  maxElementsInList?: number
}