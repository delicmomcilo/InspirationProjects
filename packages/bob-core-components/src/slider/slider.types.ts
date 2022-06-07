type Value = { left: number, right: number};

export interface IProps {
  className?: string,
  onChange: (value: Value) => void,
  initialValue?: Value
}

export type ButtonRef = { current: HTMLButtonElement};