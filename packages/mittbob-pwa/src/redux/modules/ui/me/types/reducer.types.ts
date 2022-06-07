import toggleModal from '../actions';

export interface State {
  openModal: string;
}

export type Action = ReturnType<typeof toggleModal>;
