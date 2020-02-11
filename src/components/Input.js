import styled from 'styled-components';

import { brandPrimary, textGrey, white, midGrey, brandPrimaryRGB} from '../colors';
import { doubleSpacer, baseSpacer, quarterSpacer } from '../sizes';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: ${doubleSpacer};
  padding: ${baseSpacer};
  font-size: ${baseSpacer};
  color: ${textGrey};
  background-color: ${white};
  background-image: none;
  border: 1px solid ${midGrey};
  border-radius: ${quarterSpacer};
  transition: border-color .2s ease-in-out;
  margin-bottom: ${baseSpacer};
    
  &:focus {
    border-color: ${brandPrimary};
    outline: 0;
    box-shadow: 0 0 0 ${quarterSpacer} rgba(${brandPrimaryRGB},.25);
  }
`;

export default StyledInput;
