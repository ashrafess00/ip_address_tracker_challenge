import styled from "styled-components";
import arr from "../images/icon-arrow.svg";

export const InputCon = styled.div`
  display: flex;

  align-items: center;
  height: 3rem;
  @media (min-width: 495px) {
    min-width: 25rem;
  }
`;

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search for any IP address or domain",
})`
  width: 100%;
  padding: 1rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  position: relative;
  outline: none;
`;

export const Arrow = styled.div`
  width: 3rem;
  height: 100%;
  background-color: black;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
