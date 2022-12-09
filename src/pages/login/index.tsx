import React from 'react';
import { Container, Left, Right, BlueSkew, Logo, Rings, LoginTitle,
InputGroup, Label, Input, Button, LoginCardTxt, LoginCardImg } from './styles';
import FJLogo from "../../assets/FindJobsLogo.png";
import LoginPix from "../../assets/7566-removebg-preview 1.svg";
// import { string } from "prop-types";

function Login() {
  return (
      <div>
      <Container>
        <Left>
            <BlueSkew>
                <Logo 
                    src={FJLogo} alt="Logo"
                /> 
                <LoginCardTxt>Find the best candidates for your organisation.</LoginCardTxt>
                <LoginCardImg 
                    src={LoginPix} alt="Login"
                />
            </BlueSkew>
        </Left>
        <Right>
            <Rings>
                <LoginTitle> Login</LoginTitle>
                <form action="">
                    <InputGroup>
                        <Label htmlFor="">Email</Label>
                        <Input type="email" />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="">Password</Label>
                        <Input type="password" />
                    </InputGroup>
                    <Button>Login</Button>
                </form>
            </Rings>
        </Right>
      </Container>
      </div>
  )
}

export default Login