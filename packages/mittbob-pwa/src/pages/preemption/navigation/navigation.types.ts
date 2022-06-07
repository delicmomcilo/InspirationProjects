export interface IProps {
  handleBackClick: () => void;
  handleNextClick: () => void;
  backButtonTitle: string;
  nextButtonTitle: string;
  loading?: boolean;
  disableNext?: boolean;
}
