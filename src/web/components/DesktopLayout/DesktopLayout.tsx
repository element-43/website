import * as React from 'react';
import MediaQuery from 'react-responsive';

export interface IProps {
  children: React.ReactNode;
}

export const DesktopLayout: React.FC<IProps> = (props: IProps) => (
  <MediaQuery minWidth={1111}>{props.children}</MediaQuery>
);

export default DesktopLayout;
