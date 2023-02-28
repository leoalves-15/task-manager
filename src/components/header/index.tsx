import React from "react";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <img
        src="https://ada-site-frontend.s3.sa-east-1.amazonaws.com/home/header-logo.svg"
        alt="logo ada"
      />
    </Container>
  );
}

export default Header;
