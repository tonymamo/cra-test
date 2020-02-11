import styled from 'styled-components';

import { quarterSpacer, halfSpacer, baseSpacer } from '../sizes';
import { white } from '../colors';

type Props = {
  textAlign?: 'center' | 'left' | 'right',
  height?: number,
};

const Box = styled.div`
  background: ${white};
  padding: ${baseSpacer};
  border-radius: ${quarterSpacer};
  box-shadow: 0 ${quarterSpacer} ${halfSpacer} 0 rgba(0,0,0,0.1);
  text-align: ${(props: Props) => props.textAlign};
  height: ${(props: Props) => (props.height ? `${props.height}px` : `calc(100% - ${baseSpacer})`)};
`;

Box.displayName = 'Box';
Box.defaultProps = {
  textAlign: 'left',
};

export default Box;
