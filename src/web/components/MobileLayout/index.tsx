import * as React from 'react';
import MediaQuery from 'react-responsive';

interface Props {
  children: React.ReactNode;
}

const MobileLayout: React.SFC<Props> = (props: Props) => (
  <MediaQuery maxWidth={1110}>{props.children}</MediaQuery>
);

export { MobileLayout };
