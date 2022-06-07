import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Component = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  opacity: 0.1;
  font-size: 0.75rem;
  max-width: 4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover {
    opacity: 1;
  }
`;

export default () => {
  const [content, setContent] = useState();
  useEffect(() => {
    const query = document.querySelector('meta[name="mittbob-version"]');
    const build = query && query.content;
    setContent(build);
  }, []);
  return <Component>{content}</Component>;
};
