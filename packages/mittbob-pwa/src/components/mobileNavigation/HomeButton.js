import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  HomeButton as HomeBtn,
  HomeButtonContainer,
  LeftPadding,
  RadialContainer,
  RightPadding,
} from './mobileNavigation.styles';
import { Icon } from '../atomic';
import PATHS from '../../router/paths';

const HomeButton = ({ selected, onClick }) => {
  const homeButtonRef = useRef(null);
  return (
    <HomeButtonContainer
      selected={selected}
      onClick={() => homeButtonRef.current && homeButtonRef.current.click()}
    >
      <LeftPadding />
      <RadialContainer>
        <HomeBtn
          data-path={PATHS.HOME}
          ref={homeButtonRef}
          onClick={e => {
            e.stopPropagation();
            onClick(e);
          }}
        >
          <Icon name="BobSquaresLogo" size="x-large" />
        </HomeBtn>
      </RadialContainer>
      <RightPadding />
    </HomeButtonContainer>
  );
};

HomeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default HomeButton;
