import React from 'react';
import PropTypes from 'prop-types';
import {
  Component,
  TextAndDesc,
  LinkListPart,
  TextWrapper,
  StyledHeader,
  StyledLinkList,
} from './textCard/textCard.styles';

const TextCard = ({ structure }) => {
  const { linkList, title, desc } = structure;
  return (
    <Component>
      <TextAndDesc>
        <TextWrapper>
          <StyledHeader>{title}</StyledHeader>
          <span>{desc}</span>
        </TextWrapper>
      </TextAndDesc>
      <LinkListPart>
        <StyledLinkList linkList={linkList} />
      </LinkListPart>
    </Component>
  );
};

TextCard.propTypes = {
  structure: PropTypes.shape().isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
  linkList: PropTypes.shape(),
};

TextCard.defaultProps = {
  title: undefined,
  desc: undefined,
  linkList: undefined,
};

export default TextCard;
