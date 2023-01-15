import { FilterEl } from 'components/Filter/filter.styled'
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filterSlice';

export const Filter = () => {

  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value
    
    dispatch(filter(value))
  }

  return (
    <label>
      <FilterEl>Find contacts by name</FilterEl>
      <input type="text" onChange={handleChange} />
    </label>
  );
};
