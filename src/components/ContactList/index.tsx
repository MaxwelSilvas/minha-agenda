// src/components/ContactList/index.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ContactItem from "../ContactItem";
import { List, Title } from "./styles";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <>
      <Title>Lista de Contatos</Title>
      <List>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};

export default ContactList;
