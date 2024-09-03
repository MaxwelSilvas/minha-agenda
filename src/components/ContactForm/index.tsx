import React, { useState, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Button, Form, Input } from "./styles";

let idCounter = 1;

const ContactForm = forwardRef<HTMLFormElement, {}>((props, ref) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = {
      id: idCounter++,
      name,
      email,
      phone,
    };
    dispatch(addContact(newContact));
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <Form ref={ref} onSubmit={handleSubmit}>
        <h1>Cadastrar Contato</h1>
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
        <Button type="submit">Adicionar Contato</Button>
      </Form>
    </>
  );
});

export default ContactForm;
