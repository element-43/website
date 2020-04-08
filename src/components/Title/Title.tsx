import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: number;
}

const Heading1 = styled.h1`
  font-size: 3.2rem;
`;
const Heading2 = styled.h2`
  font-size: 2.8rem;
`;
const Heading3 = styled.h3`
  font-size: 2rem;
`;
const Heading4 = styled.h4`
  font-size: 1.8rem;
`;
const Heading5 = styled.h5`
  font-size: 1.5rem;
`;

export const Title: React.FC<IProps> = ({
  children,
  level = 1,
  ...headingProps
}: IProps) => {
  switch (level) {
    case 2:
      return <Heading2 {...headingProps}>{children}</Heading2>;
    case 3:
      return <Heading3 {...headingProps}>{children}</Heading3>;
    case 4:
      return <Heading4 {...headingProps}>{children}</Heading4>;
    case 5:
      return <Heading5 {...headingProps}>{children}</Heading5>;
    default:
      return <Heading1 {...headingProps}>{children}</Heading1>;
  }
};

export const StyledTitle = styled(Title)`
  margin: 0 0 2rem;
`;

export default StyledTitle;
