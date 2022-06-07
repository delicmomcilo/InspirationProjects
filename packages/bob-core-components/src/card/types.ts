import { Actions, Header, Image, Banner} from './card.styles';
import { ReactNode } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export interface IProps {
  id?: string,
  onClose?: () => void
  children: ReactNode
}

export interface IImage {
  objectFit: 'contain' | 'cover',
  fullWidth: boolean
}

export type ExtraType = {
  Actions: typeof Actions;
  Header: typeof Header;
  Image: typeof Image;
  Banner: typeof Banner;
  ImagePlaceholder: typeof ImagePlaceholder;

};