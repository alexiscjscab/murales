import { Sliders } from '@/components/Slider';
import React from 'react';
import styled from 'styled-components';
import fondo from '../assets/images/fondo-home.jpg';
import { HomeContainer } from '@/components/HomeContainer';


// Estilo para el título principal
const Title = styled.h1`
  font-family: 'pirate', sans-serif;
  font-size: 24px;
  color: #3090ef;
  letter-spacing: 2px;
  position: relative; 
  z-index: 1; 
  text-align: center;
  padding: 2rem;
`;

const Home = () => {
  return (
    <HomeContainer backgroundImage={fondo.src}>
      <Title>MURALES CAB</Title>
      <Sliders />
    </HomeContainer>
  );
};

export default Home;
