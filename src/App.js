import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: "Rosie Simpson", number: "459-12-56" },
      { id: 2, name: "Hermione Kline", number: "443-89-12" },
      { id: 3, name: "Eden Clements", number: "645-17-79" },
      { id: 4, name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        "contacts",
        JSON.stringify(this.state.contacts)
      );
    }
  }

  addContact = (name, number) => {
    const check = this.state.contacts.find(
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

    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  changeFilter = value => {
    this.setState({ filter: value });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>

        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>

        <Filter
          filter={this.state.filter}
          setFilter={this.changeFilter}
        />

        <ContactList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;