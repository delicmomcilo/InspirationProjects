import { ARROW_LENGTH, BUTTON_SIZES } from './constants';

export const getBtnSizeByText = size =>
  BUTTON_SIZES[size] ? BUTTON_SIZES[size] : BUTTON_SIZES.large;

export const getAnimatedRectLength = ({ arrowLength = ARROW_LENGTH.SHORT }) => {
  const shortLength = '1rem';
  const mediumLength = '1.5rem';
  const longLength = '2.5';
  switch (arrowLength) {
    case ARROW_LENGTH.SHORT:
      return shortLength;
    case ARROW_LENGTH.MEDIUM:
      return mediumLength;
    case ARROW_LENGTH.LONG:
      return longLength;
    default:
      return '';
  }
};
export const getRectLength = ({ arrowLength = ARROW_LENGTH.SHORT }) => {
  const shortLength = '0';
  const mediumLength = '1rem';
  const longLength = '2rem';
  switch (arrowLength) {
    case ARROW_LENGTH.SHORT:
      return shortLength;
    case ARROW_LENGTH.MEDIUM:
      return mediumLength;
    case ARROW_LENGTH.LONG:
      return longLength;
    default:
      return ';';
  }
};

// export const expandingArrow = (variant, loading) =>
//   !loading &&
//   variant !== 'icon' &&
//   variant !== 'quaternary' &&
//   variant !== 'quinary' &&
//   variant !== 'senary' && (
//     <ArrowContainer>
//       <AnimationArrow />
//     </ArrowContainer>
//   );
//
// export const textSpan = (variant, title) => {
//   return (
//     variant !== 'icon' &&
//     title && <TextSpan className={`${NAME}__textspan`}>{title}</TextSpan>
//   );
// };

export const renderChildren = children =>
  typeof children === 'object' && children;

// export const renderIcon = props =>
//   props.name && (
//     <IconContainer>
//       <Icon {...props} />
//     </IconContainer>
//   );
