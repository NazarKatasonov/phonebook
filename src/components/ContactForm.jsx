import { useState } from "react";

function ContactForm({ onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddContact(name, number);

    setName("");
    setNumber("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name containes only letters and no numbers"
          
        />
      </label>

      <label>
        number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number contained only numbers."
      
        />
      </label>

      <button type="submit">Контакти додайте</button>
    </form>
  );
}

export default ContactForm;