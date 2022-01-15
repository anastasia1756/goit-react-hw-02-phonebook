import PropTypes from "prop-types";
import { Input } from "../ContactList/ContactList.styled";

export const Filter = ({ filter, contacts, onChange }) => {
  return (
    <div>
      {contacts.length > 0 && (
        <label>
          Find contacts by name
          <Input type="text" name="filter" value={filter} onChange={onChange} />
        </label>
      )}
    </div>
  );
};

PropTypes.Filter = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
