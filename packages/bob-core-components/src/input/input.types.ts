import { ComponentPropsWithoutRef, ChangeEvent } from 'react';
import { IMaskMixin } from "react-imask";
import { IconNames } from '../icon/types';


export interface Mask { mask: 'emailPhone' | 'email' | 'phone' |'dateOfBirth' | { [key: string]: Object[] } }

export type IMaskMixinReturnType = ReturnType<typeof IMaskMixin>

export interface IProps extends ComponentPropsWithoutRef<'input'> {
  id?: string,
  className?: string,
  disabled?: boolean,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  type?: string,
  error?: string,
  iconName?: IconNames,
  mask?: Mask['mask'],
  stickLabel?: boolean
}
