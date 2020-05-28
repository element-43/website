import React from 'react';
import styled from 'styled-components';

interface IProps {
  colour: string;
  logo: React.ReactNode;
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Folium: React.FC = () => {
  return <Wrapper></Wrapper>;
};

export default Folium;
