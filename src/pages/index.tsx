import { Sliders } from '@/components/Slider';
import React from 'react';
import styled from 'styled-components';
import fondo from '../assets/images/fondo-home.jpg';
import { HomeContainer } from '@/components/HomeContainer';

// Estilo del título
const Title = styled.h1`
  font-family: 'pirate', sans-serif;
  font-size: 30px;
  color: #3090ef;
  letter-spacing: 2px;
  text-align: center;
  padding: 2rem;
  position: relative;
  z-index: 1;
`;

// Estilo del contenedor principal con fondo
const HomeContainerStyled = styled.div<{ $backgroundImage: string }>`
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <HomeContainerStyled $backgroundImage={fondo.src}>
      <Title>MURALES CAB</Title>
      <Sliders />
    </HomeContainerStyled>
  );
};

export default Home;
