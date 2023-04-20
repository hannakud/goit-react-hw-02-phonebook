import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export const ContactList = ({ list, filter, onDeleteContact }) => {
  const isContantactsExist = Boolean(list.length);
  const emptyMessage = filter
    ? `No contacts macth "${filter}"`
    : 'Phonebook is empty. Add contacts first';
  return (
    <div>
      {isContantactsExist ? (
        <ul className={css.contactList}>
          {list.map(contact => {
            return (
              <li className={css.contactItem} key={contact.id}>
                <span>{contact.name}: </span>
                <span>{contact.number} </span>
                <button
                  className={css.button}
                  onClick={() => onDeleteContact(contact.id)}
                >
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
