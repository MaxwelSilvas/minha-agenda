// src/components/ContactItem/styles.ts
import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: space-between;
  border-radius: 10px;
  width: 100%;
  
`;

export const ContactInfo = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
  margin: 3px 0;
  border-radius: 10px;


  &:hover {
    background-color: #c82333;
  }
`;

export const EditButton = styled(Button)`
  background-color: #282c34;

  &:hover {
    background-color: #0056b3;
  }
`;
