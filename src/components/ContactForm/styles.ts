import styled from 'styled-components';

export const Form = styled.form`
  display: none; 
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
  transition: all 0.3s ease;
  

  &.active {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  h1 {
    align-items: center;
    text-align: center;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  width: 100%;
  margin-top: 15px;


  &:focus {
    outline: none;
    border-color: #07783a;
    box-shadow: 0 0 5px rgba(97, 218, 251, 0.5);
  }
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  background-color: #282c34;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  margin-top: 15px;

  &:hover {
    background-color: #07783a;
  }

  &:active {
    background-color: #1e90ff;
  }
`;
