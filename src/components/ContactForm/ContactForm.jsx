import { Name, Number, Label } from 'components/ContactForm/contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export default function ContactForm({ onSubmit }) {


  const contactsList = useSelector(getContacts);

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
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <Label>
        <Name>Name</Name>
        <input
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
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </form>
  );
}
