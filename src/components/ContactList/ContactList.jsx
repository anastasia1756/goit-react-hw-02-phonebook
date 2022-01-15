export const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
