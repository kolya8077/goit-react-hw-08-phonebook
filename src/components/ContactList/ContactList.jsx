import { Ul, Span, Item } from 'components/ContactList/contactList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contactsList = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  const handelDelete = (e) => {
    dispatch(removeContact(e))
  };


  const getVisibleList = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contactsList.filter(list =>
      list.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleList = getVisibleList();

  return (
    <Ul>
      {visibleList.map(({ name, number, id }) => (
        <Item key={id}>
          <Span>
            {name}: {number}
          </Span>
          <button type="button" onClick={() => handelDelete(id)}>
            delete
          </button>
        </Item>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
