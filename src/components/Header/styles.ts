// src/components/Header/styles.ts
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
  border: 1px solid white;

  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #282c34;
    border: 1px solid white;
  }
`;
