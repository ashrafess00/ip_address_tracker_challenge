import styled from "styled-components";
// import bg from "../images/pattern-bg.png"

export const IpContainer = styled.div`
  padding: 3rem 5rem 3rem 2rem;
  z-index: 1000;
  background-color: white;
  margin-top: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0 1fr 0 1fr 0 1fr;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 10px;
  p {
    margin-bottom: 1rem;
  }
  b {
    font-size: 1.6rem;
  }
  span {
    width: 1px;
    background-color: gray;
    opacity: 0.5;
    height: 80%;
    display: block;
  }

  @media (max-width: 1258px) {
    font-size: 0.8rem;
    b {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1rem 0.5rem;

    font-size: 1.1rem;

    b {
      font-size: 1.3rem;
    }
    span {
      display: none;
    }
  }
`;
