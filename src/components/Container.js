// @flow
import styled from 'styled-components';

import { breakpoints, baseSpacer, halfSpacer } from '../sizes';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${halfSpacer};
  padding-left: ${halfSpacer};
  width: 100%;
  max-width: ${breakpoints.xl};
  flex: 1;
  height: 100%;
  
  @media only screen and (min-width: ${breakpoints.sm}) {
    padding-right: ${baseSpacer};
    padding-left: ${baseSpacer};
  }
`;

export default Container;
