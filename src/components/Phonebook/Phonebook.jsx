import React, { Component } from 'react';
import ContactsList from '../ContactsList/ContactsList';
import Form from '../Form/Form';
import css from './Phonebook.module.css';
import { v4 as uuidv4 } from 'uuid';
import FilterList from '../FilterList/FilterList';
import PropTypes from 'prop-types';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+380501112233' },
      { id: 'id-2', name: 'Hermione Kline', number: '+380671112233' },
      { id: 'id-3', name: 'Eden Clements', number: '+380931112233' },
      { id: 'id-4', name: 'Annie Copeland', number: '+380501112334' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: uuidv4() }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts() {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  }

  onFilterHandleChange = filter => {
    this.setState({ filter });
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    const { filter } = this.state;
    return (
      <div className={css.wraper}>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />
        <h2>Contacts</h2>
        <FilterList
          filter={filter}
          onFilterHandleChange={this.onFilterHandleChange}
        />

        <ContactsList
          contact={visibleContacts}
          ondeleteContact={this.deleteContact}
        ></ContactsList>
      </div>
    );
  }
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
export default Phonebook;