import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <input value={value} onChange={onChangeFilter}></input>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
