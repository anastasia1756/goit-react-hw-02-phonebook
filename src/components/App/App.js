import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';
import { ContactForm } from '../ContactForm';
// const INITIAL_STATE = {
//   contacts: [],
//   name: '',
// };

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (submitedName, submitedNumber) => {
    const id = nanoid();
    const newContact = { name: submitedName, id, number: submitedNumber };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };
  findContact = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
  deleteContact = (contactId) => {
    console.log('click');
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.findContact();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          contacts={contacts}
          onChange={this.filterInputChange}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteClick={this.deleteContact}
        />
      </div>
    );
  }
}
