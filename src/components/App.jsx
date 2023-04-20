import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = formValue => {
    const isExist = this.state.contacts.some(
      el => el.name.toLowerCase() === formValue.name.trim().toLowerCase()
    );
    if (isExist) {
      alert('Contact is already exist');
      return;
    }
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name: formValue.name,
        number: formValue.number,
      };
      return {
        contacts: [...prevState.contacts, newContact],
        filter: prevState.filter,
      };
    });
  };

  onDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== id),
        filter: prevState.filter,
      };
    });
  };

  onChangeFilter = event => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts,
        filter: event.target.value,
      };
    });
  };

  getFilteredContactsList = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase().trim())
    );
  };

  render() {
    const filteredContactsList = this.getFilteredContactsList();

    return (
      <main className={css.main}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <ContactList
          filter={this.state.filter}
          list={filteredContactsList}
          onDeleteContact={this.onDeleteContact}
        />
      </main>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onAddContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
