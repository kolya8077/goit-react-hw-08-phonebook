import { Ul, Span, Item } from 'components/ContactList/contactList.styled';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  fetchContactsDelete,
} from 'redux/contacts/contactsOperations';
import { getFilter, getContacts, getIsLoading } from 'redux/selectors';

export const ContactList = () => {
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const { isLoading } = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleList = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts?.filter(list =>
      list.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleList = getVisibleList();

  return (
    <>
      {contacts && (
        <Ul>
          {visibleList.map(({ name, number, id }) => (
            <Item key={id}>
              <Span>
                {name}: {number}
              </Span>
              <button
                type="button"
                onClick={() => {
                  dispatch(fetchContactsDelete(id));
                }}
                disabled={isLoading}
              >
                delete
              </button>
            </Item>
          ))}
        </Ul>
      )}
    </>
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
