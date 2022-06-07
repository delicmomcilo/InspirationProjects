import { ComponentPropsWithoutRef } from 'react';
import { IListItem } from './item/item.types';

export interface IProps extends ComponentPropsWithoutRef<'ul'>{
  Item?: IListItem,
  autoFocus?: boolean
}
