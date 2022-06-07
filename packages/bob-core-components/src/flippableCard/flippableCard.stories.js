import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';
import Card from '../Card';
import FlippableCard from '../FlippableCard';

export default {
  title: 'Flippable Card',
};

const defaultText = `Lorem ipsum text here.Lorem ipsum text here.Lorem ipsum text here.`;

export const withEmptyContent = () => {
  const flipped = boolean('Flipped', false);
  return <FlippableCard flip={flipped} />;
};

export const withSimpleContent = () => {
  const flipped = boolean('Flipped', false);
  const backside = (
    <>
      <Card.Header>Backside!</Card.Header>
      <span>{defaultText}</span>
      <span>{defaultText}</span>
      <span>{defaultText}</span>
    </>
  );
  const frontside = (
    <>
      <Card.Header>Frontside!</Card.Header>
      <span>{defaultText}</span>
    </>
  );
  return (
    <FlippableCard flip={flipped} backside={backside} frontside={frontside} />
  );
};

export const withCustomRenderer = () => {
  const flipped = boolean('Flipped', false);
  const backside = (
    <>
      <Card.Header>Backside!</Card.Header>
      <span>{defaultText}</span>
      <span>{defaultText}</span>
      <span>{defaultText}</span>
    </>
  );
  const frontside = (
    <>
      <Card.Header>Frontside!</Card.Header>
      <span>{defaultText}</span>
    </>
  );
  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
    > * {
      &:first-child {
        flex-grow: 1;
        z-index: 10;
      }
    }
  `;
  const ExtraChild = styled.div`
    width: 100%;
    height: 3rem;
    background-color: #eee;
  `;
  const backsideRenderer = (FrontsideContainer, frontsideContent) => (
    <Container>
      <FrontsideContainer>{frontsideContent}</FrontsideContainer>
      <ExtraChild>
        Extra child
        <div style={{ position: 'absolute', top: '-30px' }}>nested</div>{' '}
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            transform: 'translateX(-10px)',
          }}
        >
          test2
        </div>
      </ExtraChild>
    </Container>
  );

  return (
    <FlippableCard
      flip={flipped}
      backsideRenderer={backsideRenderer}
      backside={backside}
      frontside={frontside}
    />
  );
};
