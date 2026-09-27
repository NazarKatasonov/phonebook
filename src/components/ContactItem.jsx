function ContactItem({ contact, onDelete }) {
  return (
   <div>
      {contact.name}: {contact.number}

      <button onClick={() => onDelete(contact.id)}>
        Delit
      </button>
   </div>
  );
}

export default ContactItem;