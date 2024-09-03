import React, { useRef, useState, useEffect } from 'react';
import { HeaderContainer, Title, Navigation, ToggleButton } from './styles';
import ContactForm from '../ContactForm';

const Header: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false); 


  const handleToggle = () => {
    if (formRef.current) {
      const isCurrentlyHidden = formRef.current.style.display === 'none' || formRef.current.style.display === '';
      formRef.current.style.display = isCurrentlyHidden ? 'block' : 'none';
      setIsFormVisible(!isCurrentlyHidden); 
    }
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.style.display = 'none'; 
    }
  }, []);

  return (
    <>
      <HeaderContainer>
        <Title>Minha Agenda</Title>
        <Navigation>
          <ToggleButton onClick={handleToggle}>
            {isFormVisible ? 'Cadastrar Contato' : 'Ocultar Cadastrar'}
          </ToggleButton>
        </Navigation>
      </HeaderContainer>
      <ContactForm ref={formRef} />
    </>
  );
};

export default Header;
