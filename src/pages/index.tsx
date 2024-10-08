import { Sliders } from '@/components/Slider';
import React from 'react';
import styled from 'styled-components';
import fondo from '../assets/images/fondo-home.jpg';

// Define las props que el contenedor aceptará
interface HomeContainerProps {
  backgroundImage: string;
}

// Estilo para el contenedor principal
const HomeContainer = styled.div<HomeContainerProps>`
  text-align: center;
  height: 100vh; /* Ocupar toda la altura de la pantalla */
  background-image: url(${(props) => props.backgroundImage}); /* Imagen de fondo */
  background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* No repite la imagen */
`;

// Estilo para el título principal
const Title = styled.h1`
  font-family: 'pirate', sans-serif;
  font-size: 24px;
  color: #3090ef;
  letter-spacing: 2px;
  margin-top: 1rem;
  position: relative; /* Para que el z-index funcione */
  z-index: 1; /* Asegura que el título esté por encima de la imagen */
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
