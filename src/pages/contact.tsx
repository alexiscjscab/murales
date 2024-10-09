import React from 'react';
import styled from 'styled-components';

// Estilos para el contenedor principal
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: #fff;
  text-align: center;
`;

// Estilos para el título
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Estilos para el texto descriptivo
const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Estilos para el botón de contacto
const ContactButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  background-color: #f26a6a;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #ff4d4d;
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`;

// Componente principal
const MuralContact: React.FC = () => {
  return (
    <Container>
      <Title>¿Quieres un mural?</Title>
      <Description>¡Contáctanos para hacer realidad tu idea artística!</Description>
      <ContactButton href="mailto:contacto@murales.com">Contáctanos</ContactButton>
    </Container>
  );
};

export default MuralContact;
