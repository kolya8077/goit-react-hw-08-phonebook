import { Name, Number, Label } from 'components/ContactForm/contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/selectors';
import { fetchAddContacts } from 'redux/contacts/contactsOperations';
import { Input, Button } from '@chakra-ui/react';


export default function ContactForm() {
  const contactsList = useSelector(getContacts);

  const { isLoading } = useSelector(getIsLoading);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contactsList.find(contacts => contacts.number === number)) {
      alert(`${number} is already in contacts.`);
      return form.reset();
    }

    if (
      contactsList.find(
        contacts =>
          contacts.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return form.reset();
    }
    const contact = {
      name: name,
      number: number,
    };

    dispatch(fetchAddContacts(contact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <Label>
        <Name>Name</Name>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <br />
      <Label>
        <Number>Number</Number>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button
        isLoading={isLoading}
        loadingText="Submitting"
        colorScheme="green"
        variant="outline"
        type="submit"
        
      >
        Add contact
      </Button>
    </form>
  );
}
