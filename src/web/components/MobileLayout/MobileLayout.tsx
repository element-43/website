import * as React from 'react';
import MediaQuery from 'react-responsive';

export interface Props {
  children: React.ReactNode;
}

export const MobileLayout: React.SFC<Props> = (props: Props) => (
  <MediaQuery maxWidth={1110}>{props.children}</MediaQuery>
);

export default MobileLayout;
