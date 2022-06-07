type InputProps = JSX.IntrinsicElements['input'];

export interface IProps extends InputProps {
  label?: string;
  error?: string;
  mask?: string;
  maskValue?: string;
}

export interface IIMaskMixin {
  maskValue: string;
}
