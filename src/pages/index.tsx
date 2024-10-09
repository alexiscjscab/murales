import { Sliders } from '@/components/Slider';
import React from 'react';
import styled from 'styled-components';
import fondo from '../assets/images/fondo-home.jpg';

// Estilo del título
const Title = styled.h1`
  font-family: 'Pirate', sans-serif;
  font-size: 30px;
  color: #3090ef; /* Color del texto */
  letter-spacing: 3px;
  text-align: center;
  padding: 2rem;
  margin: 0.5rem;
  position: relative;
  z-index: 1;

  /* Sombra de texto */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ajusta los valores según sea necesario */

  /* Efecto hover */
  transition: transform 0.3s ease, color 0.3s ease; /* Transiciones suaves */
  
  &:hover {
    color: #fff; /* Cambia el color al dorado al hacer hover */
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); /* Aumenta la sombra de texto */
  }
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
