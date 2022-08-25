import { FilterEl } from 'components/Filter/filter.styled'
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <FilterEl>Find contacts by name</FilterEl>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};