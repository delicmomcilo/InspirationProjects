import styled from 'styled-components';
import { Input } from '@bob/core-components';
import { ShortcutButton } from '../../../components/atomic';

export const Header = styled.h1.attrs(() => ({
  className: 'bob-core-components-typography__regular--x-large--violet',
}))`
  padding-bottom: 1rem;
`;

export const Info = styled.p``;

export const UploadProof = styled.h3.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium-1--violet',
}))`
  padding: 2rem 0;
`;

export const Button = styled(ShortcutButton)`
  align-self: center;
`;

export const HiddenInput = styled.input.attrs(() => ({
  type: 'file',
  accept: 'application/pdf',
  multiple: false,
}))`
  visibility: hidden;
`;

export const Inputs = styled.div`
  padding: ${({ theme }) => theme.variables.sizes.padding};
  ${Input} {
    max-width: 20rem;
  }
`;
