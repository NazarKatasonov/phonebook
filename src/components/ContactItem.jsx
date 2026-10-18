function ContactItem({ contact, onDelete }) {
  return (
    <li>
      <span>
        {contact.name}: {contact.number}
      </span>

      <button onClick={() => onDelete(contact.id)}>Видалити</button>
    </li>
  );
}

export default ContactItem;