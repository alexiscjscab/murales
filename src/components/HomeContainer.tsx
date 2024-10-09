import styled from 'styled-components';

interface HomeContainerProps {
  backgroundImage: string;
}

// Estilo para el contenedor principal
export const HomeContainer = styled.div<HomeContainerProps>`
  text-align: center;
  height: 100vh; 
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat; 
`;