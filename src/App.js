import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Rosie Simpson", number: "459-12-56" },
    { id: 2, name: "Hermione Kline", number: "443-89-12" },
    { id: 3, name: "Eden Clements", number: "645-17-79" },
    { id: 4, name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  function addContact(name, number) {
    const check = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (check) {
      alert("Такий контакт вже є");
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
  }

  function deleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>

      <Filter filter={filter} setFilter={setFilter} />

      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;