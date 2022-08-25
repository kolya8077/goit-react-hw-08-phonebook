import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Container, FormEl, TitleContacts } from 'components/app.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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

  formSubmitHandler = data => {
    const addContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const arr = this.state.contacts;

    if (arr.find(arr => arr.number === data.number))
      return alert(`${data.number} is already in contacts.`);

    if (
      arr.find(
        arr => arr.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      )
    )
      return alert(`${data.name} is already in contacts.`);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, addContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleList = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(list =>
      list.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deliteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== itemId),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleList = this.getVisibleList();

    return (
      <Container>
        <FormEl>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </FormEl>

        <div>
          <TitleContacts>Contacts</TitleContacts>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList events={visibleList} onDeliteItem={this.deliteItem} />
        </div>
      </Container>
    );
  }
}

export default App;
