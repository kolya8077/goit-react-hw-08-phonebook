import ContactForm from 'components/ContactForm/ContactForm';
import { Container, FormEl, TitleContacts } from 'components/ContactBook/contactBook.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const ContactBook = () => {
  return (
    <Container>
      <FormEl>
        <ContactForm />
      </FormEl>

      <div>
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};
