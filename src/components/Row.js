// @flow
import styled from 'styled-components';

import { halfSpacer } from '../sizes';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -${halfSpacer};
  margin-left: -${halfSpacer};  
`;

export default Row;
