export interface IProps {
  name?: string,
  mobile?: string,
  onSave: (name: string, mobile: string) => void
}