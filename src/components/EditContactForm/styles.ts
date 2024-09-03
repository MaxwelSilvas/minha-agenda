import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 1rem;
  background-color: #282c34;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #07783a;
  }
`;

export const ButtonCancel = styled.button`
  padding: 8px;
  font-size: 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;
