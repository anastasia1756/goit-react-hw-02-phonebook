export const Filter = ({ filter, contacts, onChange }) => {
  return (
    <div>
      {contacts.length > 0 && (
        <label>
          Find contacts by name
          <input type="text" name="filter" value={filter} onChange={onChange} />
        </label>
      )}
    </div>
  );
};
