import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fbfbff;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
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
`;

const Logo = styled.div`
  font-family: 'Pirate', sans-serif;
  color: #000;
  letter-spacing: 2px;
`;

const Main = styled.main`
  margin-top: 3rem; /* Ajusta este valor según la altura del navbar */
`;


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar>
        <NavItems>
          <NavItem>
            <Link href="/">Inicio</Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">Contacto</Link>
          </NavItem>
        </NavItems>
        {/* Logo centrado en el navbar */}
        <Logo>MURALES CAB</Logo>
      </Navbar>
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
