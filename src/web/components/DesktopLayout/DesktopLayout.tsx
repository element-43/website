import * as React from 'react';
import MediaQuery from 'react-responsive';

export interface Props {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<Props> = (props: Props) => (
  <MediaQuery minWidth={1111}>{props.children}</MediaQuery>
);

export default DesktopLayout;
