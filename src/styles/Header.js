import styled from "styled-components";
// import bg from "../images/pattern-bg.png"

export const Header = styled.div`
  background-image: url("pattern-bg.png");
  width: 100%;
  height: 40vh;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 1000;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 3rem;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    text-align: center;
    font-size: 1.1rem;
    width: 95%;
    b {
      font-size: 1.3rem;
    }
  }
`;
