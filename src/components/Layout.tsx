import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa'; // Importa el ícono de Instagram

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const NavItems = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px; /* Altura del navbar */
    left: 0;
    right: 0;
    background: #fbfbff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  margin-right: 1.2rem;

  a {
    color: #3090ef;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Pirate', sans-serif;
    letter-spacing: 1.2px;
    text-decoration: none;
    transition: color 0.3s, border-bottom 0.3s;

    &:hover {
      color: #000;
      border-bottom: 2px solid #3090ef;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    text-align: center;
  }
`;

const Logo = styled.div``;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;

  div {
    width: 100%;
    height: 4px;
    background-color: #3090ef;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Main = styled.main`
  margin-top: 3rem; /* Ajusta este valor según la altura del navbar */
  margin-bottom: 80px; /* Añade margen inferior para el footer */
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row; /* Coloca los elementos uno debajo del otro */
  align-items: center; /* Centra horizontalmente */
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-family: 'Pirate', sans-serif;
  position: fixed; /* Cambia a fixed */
  bottom: 0; /* Coloca el footer en la parte inferior */
  left: 0;
  right: 0; /* Asegúrate de que ocupe todo el ancho */
  z-index: 1000; /* Asegúrate de que esté encima de otros elementos */
`;

const FooterText = styled.span`
  color: #3090ef; /* Color del texto */
  margin: 5px; /* Espacio entre el texto y el icono de Instagram */
  padding: 0.3rem;
  letter-spacing: 3px;
`;

const InstagramIcon = styled.a`
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #3090ef; /* Cambia a un color al hacer hover */
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Navbar>
        <Logo>
          <Image src={logo} alt={'Murales CAB'} height={50} width={40} />
        </Logo>
        <Hamburger onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </Hamburger>
        <NavItems isOpen={isOpen} ref={navRef}>
          <NavItem>
            <Link href='/' onClick={closeMenu}>
              Inicio
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/contact' onClick={closeMenu}>
              Contacto
            </Link>
          </NavItem>
        </NavItems>
      </Navbar>
      <Main>{children}</Main>
      <Footer>
        <FooterText>MURALES CAB</FooterText>
        <InstagramIcon
          href='https://www.instagram.com/muralescab/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram size={24} />
        </InstagramIcon>
        <FooterText>Los Piratas Celestes de Alberdi</FooterText>
        <InstagramIcon
          href='https://www.instagram.com/los.piratascelestesdealberdi/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram size={24} />
        </InstagramIcon>
      </Footer>
    </div>
  );
};

export default Layout;
