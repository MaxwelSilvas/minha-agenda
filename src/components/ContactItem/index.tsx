// src/components/ContactItem/index.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Contact, removeContact, updateContact } from '../../redux/contactsSlice';
import { Button, ItemContainer, ContactInfo, EditButton } from './styles';
import EditContactForm from '../EditContactForm'; // Importar o componente de edição

interface ContactItemProps {
  contact: Contact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEdit = (updatedContact: Contact) => {
    dispatch(updateContact(updatedContact));
    setIsEditing(false);
  };

  return (
    <ItemContainer>
      {isEditing ? (
        <EditContactForm contact={contact} onSave={handleEdit} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <ContactInfo>
            <div><strong>Nome:</strong> {contact.name}</div>
            <div><strong>E-mail:</strong> {contact.email}</div>
            <div><strong>Telefone:</strong> {contact.phone}</div>
          </ContactInfo>
          <EditButton onClick={() => setIsEditing(true)}>Editar</EditButton>
          <Button onClick={handleRemove}>Remover</Button>
        </>
      )}
    </ItemContainer>
  );
};

export default ContactItem;
