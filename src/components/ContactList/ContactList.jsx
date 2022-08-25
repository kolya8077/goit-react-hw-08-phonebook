import { Ul, Span, Item } from 'components/ContactList/contactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ events, onDeliteItem }) => {
  return (
    <Ul>
      {events.map(({ name, number, id }) => (
        <Item key={id}>
          <Span>
            {name}: {number}
          </Span>
          <button type="button" onClick={() => onDeliteItem(id)}>
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
  onDeliteItem: PropTypes.func.isRequired,
};