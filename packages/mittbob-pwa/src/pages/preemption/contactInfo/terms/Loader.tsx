import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeContext } from 'styled-components';
import { Container, Header, Rows } from './loader/loader.styles';

const Loader = (): JSX.Element => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <SkeletonTheme color={theme.variables.colors.mint60}>
        <Header>
          <Skeleton height={theme.variables.sizes.fontSizes['large-2']} />
        </Header>
      </SkeletonTheme>
      <Rows>
        <Skeleton height={theme.variables.sizes.fontSizes.defaultSize} count={10} />
      </Rows>
      <SkeletonTheme color={theme.variables.colors.mint60}>
        <Header>
          <Skeleton height={theme.variables.sizes.fontSizes['large-2']} />
        </Header>
      </SkeletonTheme>
      <Rows>
        <Skeleton height={theme.variables.sizes.fontSizes.defaultSize} count={10} />
      </Rows>
      <SkeletonTheme color={theme.variables.colors.mint60}>
        <Header>
          <Skeleton height={theme.variables.sizes.fontSizes['large-2']} />
        </Header>
      </SkeletonTheme>
      <Rows>
        <Skeleton height={theme.variables.sizes.fontSizes.defaultSize} count={10} />
      </Rows>
    </Container>
  );
};

export default Loader;
