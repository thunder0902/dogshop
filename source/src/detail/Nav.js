import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {useNavigate } from "react-router-dom";

function NavComponent(props) {
  const home = useNavigate();
  const setMainPage = props.setMainPage;
  function on(){
    setMainPage(false);
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><h3 style={{color:"#eb7d46"}}>강아지야</h3></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="" onClick={()=>{
            home('/');
            on();
          }}>Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Info</Nav.Link>
          <Nav.Link className="cart" href="" onClick={()=>{
            home('/cart');
          }}>장바구니</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavComponent;