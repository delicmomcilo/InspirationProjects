import styled from 'styled-components';

export const Container = styled.div`
  max-height: 0; /* Set programatically */
  overflow: hidden;
  transition: max-height 0.2s ease-in;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const EmbeddedContainer = styled.div`
  position: relative;
  padding-bottom: 75%;
`;

const EmbeddedMap = styled.iframe.attrs(() => ({
  frameBorder: '0',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Embedded = {
  Container: EmbeddedContainer,
  Map: EmbeddedMap,
};

const SectionContainer = styled.div``;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
`;

const SectionTitle = styled.h2.attrs(() => ({
  className: 'bob-core-components-typography__regular--large--coal',
}))``;

const SectionProperty = styled.p.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium-1--coal',
}))`
  margin-top: 0.5rem;
`;

const SectionHeading = styled.h3.attrs(() => ({
  className: 'bob-core-components-typography__bold--medium-1--violet',
}))``;

const SectionParagraph = styled.p.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium-1--coal',
}))``;

export const Section = {
  Container: SectionContainer,
  Row: SectionRow,
  Title: SectionTitle,
  Property: SectionProperty,
  Heading: SectionHeading,
  Paragraph: SectionParagraph,
};

const SeniorityRulesList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;

const SeniorityRulesItem = styled.li``;

export const SeniorityRules = {
  List: SeniorityRulesList,
  Item: SeniorityRulesItem,
};
