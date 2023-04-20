import PropTypes from 'prop-types';

export const ContactList = ({ list, filter, onDeleteContact }) => {
  const isContantactsExist = Boolean(list.length);
  const emptyMessage = filter
    ? `No contacts macth "${filter}"`
    : 'Phonebook is empty. Add contacts first';
  return (
    <div>
      {isContantactsExist ? (
        <ul>
          {list.map(contact => {
            return (
              <li key={contact.id}>
                <span>{contact.name}: </span>
                <span>{contact.number} </span>
                <button onClick={() => onDeleteContact(contact.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>{emptyMessage}</div>
      )}
    </div>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
