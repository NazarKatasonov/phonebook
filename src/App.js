import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  function addContact(contact) {
    const found = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (found) {
      alert(contact.name + " is already in contacts");
      return;
    }

    setContacts([...contacts, contact]);
  }

  function deleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>

      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={setFilter} />

      <ContactList
        contacts={visibleContacts}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;