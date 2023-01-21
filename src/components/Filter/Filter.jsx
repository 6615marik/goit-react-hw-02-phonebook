import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <input
      className={css.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Search"
    />
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
