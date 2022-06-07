import React from 'react';
import PropTypes from 'prop-types';
import {
  Component,
  Title,
  NavWrapper,
  NavButton,
} from './cardLinkList/cardLinkList.styles';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const CardLinkList = ({ linkList, className }) => {
  const { title, links } = linkList;
  const dispatch = useDispatch();

  const handleClick = (e, url, onClick) => {
    onClick && onClick(e);
    url && !onClick && dispatch(push(url));
  };

  return (
    <Component className={className}>
      <Title>{title}</Title>
      {links.map(({ text, url, onClick }) => (
        <NavWrapper key={`${text}_${title}`}>
          <div>
            <NavButton
              data-href={url}
              onClick={e => handleClick(e, url, onClick)}
            >
              {text}
            </NavButton>
          </div>
        </NavWrapper>
      ))}
    </Component>
  );
};

CardLinkList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  linkList: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, url: PropTypes.string }),
    ),
  }),
};

CardLinkList.defaultProps = {
  title: undefined,
  className: undefined,
  linkList: undefined,
};

export default CardLinkList;
