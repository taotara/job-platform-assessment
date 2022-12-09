import React from 'react'
import { Container, Logo, Wrapper } from './styles';
import FJLogo from "../../assets/FindJobsLogo.png";
import Navbar from '../navbar';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo src={FJLogo} alt="Logo" />
        <Navbar />
      </Container>
    </Wrapper>
  )
}

export default Header