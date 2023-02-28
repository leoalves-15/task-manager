import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 4% 0px;
  width: 92%;
  min-height: 100vh;
  height: 100%;
  background-color: rgb(24, 28, 35);
  background-image: url(https://ada-site-frontend.s3.sa-east-1.amazonaws.com/home/home-background.svg);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: contain;
`;

export const Row = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
