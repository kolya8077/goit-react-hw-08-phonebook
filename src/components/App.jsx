import ContactForm from 'components/ContactForm/ContactForm';
import { Container, FormEl, TitleContacts } from 'components/app.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
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
}
