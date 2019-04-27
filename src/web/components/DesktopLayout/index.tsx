import * as React from 'react';
import MediaQuery from 'react-responsive';

interface Props {
  children: React.ReactNode;
}

const DesktopLayout: React.SFC<Props> = (props: Props) => (
  <MediaQuery minWidth={1111}>{props.children}</MediaQuery>
);

export { DesktopLayout };
