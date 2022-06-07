import styled, { css } from 'styled-components';
import { Card, Grid } from '@bob/core-components';
import { media } from '../../app/app.styles';

export const Container = styled(Grid)`
  padding: ${({ theme }) => theme.variables.sizes.padding };
`;

export const MemberInfoCard = styled(Card)`
  margin-top: ${({ theme }) => theme.variables.sizes.padding};

${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
        margin-top: unset;
    }
  `}
  background-color: ${({ theme }) => theme.variables.colors.violet};
  color: ${({ theme }) => theme.variables.colors.snow};
  max-width: 22rem;
`;

export const DesktopContainer = styled(Grid)`
  padding: ${({ theme }) => theme.variables.sizes.doublePadding};

  display: none;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      display: unset;
    }
  `}
`;

export const ButtonsContainer = styled(Grid)`
  padding: ${({ theme }) => theme.variables.sizes.doublePadding};
`;

export const ShortcutAlignEnd = styled(Grid)`
  justify-content: flex-end;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      justify-content: center;
    }
  `}
`;
export const ShortcutAlignStart = styled(Grid)`
  justify-content: flex-start;
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      justify-content: center;
    }
  `}
`;


// Temporary quick fix for scrolling bug that happens because of fixed bottomnav. This is temporary
// since there is a task to remove the fixed bottomnav with a better approach.
export const SpacingForScrollBugBecauseOfBottomNav = styled(Grid)`
  height: 3rem;
`;

export const BigWelcomeContainer = styled.div`
  width: 100%;
  padding: 5rem 5rem 1rem 5rem;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  align-items: flex-start;
  > button {
    margin-top: 4rem;
  }
  > p {
    max-width: 27rem;
  }
  ${media.app} {
    display: none;
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  max-height: 20rem;
  overflow: hidden;
  svg {
    /* Hack to prevent white edges */
    width: calc(100%);
    margin-left: -0.125rem;
    margin-bottom: -0.25rem;
  }
  ${media.app} {
    max-width: 30rem;
    max-height: 15rem;
  }
`;

export const MobileContainer = styled(Grid)`
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      display: none;
    }
  `}
`;

export const TopContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;

  ${media.app} {
    display: flex;
  }
`;

export const ShortcutsContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 5rem 10rem 10rem;
  justify-content: flex-end;
  align-self: flex-end;
  > * {
    align-self: flex-end;
    margin-left: 5rem;
  }

  ${media.app} {
    justify-content: unset;
    align-self: unset;
    flex-direction: column;
    width: calc(100% - 5rem);
    max-width: 35rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    > * {
      margin-left: 0;
      &:nth-child(even) {
        align-self: flex-start;
      }
    }
  }
`;

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const UmbracoContent = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--coal',
}))`
  p {
    margin: 0.5rem 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
