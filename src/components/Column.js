// @flow
import styled from 'styled-components';

import { halfSpacer, baseSpacer, breakpoints } from '../sizes';

function createColumnSpan(breakpoint: number) {
  const width = (breakpoint / 12) * 100;
  return `
    width: ${width}%;
    margin-left: 0;
  `;
}

const Column = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: ${halfSpacer};
  padding-left: ${halfSpacer};
  flex: 0 0 auto;
  margin-bottom: ${baseSpacer};
  
  ${(props: Props) => (props.xs ? createColumnSpan(props.xs) : 'width: 100%')};

  
  @media only screen and (min-width: ${breakpoints.sm}) {
    ${(props: Props) => props.sm && createColumnSpan(props.sm)};
  }
  
  @media only screen and (min-width: ${breakpoints.md}) {
    ${(props: Props) => props.md && createColumnSpan(props.md)};
  }
  
  @media only screen and (min-width: ${breakpoints.lg}) {
    ${(props: Props) => props.lg && createColumnSpan(props.lg)};
  }
  
  @media only screen and (min-width: ${breakpoints.xl}) {
    ${(props: Props) => props.xl && createColumnSpan(props.xl)};
  }  
`;

export default Column;
