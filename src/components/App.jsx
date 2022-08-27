import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { Container, FormEl, TitleContacts } from 'components/app.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactList
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const addContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };


    if (contacts.find(contacts => contacts.number === data.number))
      return alert(`${data.number} is already in contacts.`);

    if (
      contacts.find(
        contacts => contacts.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      )
    )
      return alert(`${data.name} is already in contacts.`);

    setContacts([...contacts, addContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleList = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(list =>
      list.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deliteItem = itemId => {
    setContacts(contacts => contacts.filter(item => item.id !== itemId));
  };

  const visibleList = getVisibleList();

  return (
    <Container>
      <FormEl>
        <ContactForm onSubmit={formSubmitHandler} />
      </FormEl>

      <div>
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList events={visibleList} onDeliteItem={deliteItem} />
      </div>
    </Container>
  );
}
