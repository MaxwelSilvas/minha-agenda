// src/components/EditContactForm/index.tsx
import React, { useState } from "react";
import { Contact } from "../../redux/contactsSlice";
import { Button, Form, Input } from "./styles";

interface EditContactFormProps {
  contact: Contact;
  onSave: (contact: Contact) => void;
  onCancel: () => void;
}

const EditContactForm: React.FC<EditContactFormProps> = ({
  contact,
  onSave,
  onCancel,
}) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedContact = { ...contact, name, email, phone };
    onSave(updatedContact);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <Button type="submit">Salvar</Button>
      <Button type="button" onClick={onCancel}>
        Cancelar
      </Button>
    </Form>
  );
};

export default EditContactForm;
