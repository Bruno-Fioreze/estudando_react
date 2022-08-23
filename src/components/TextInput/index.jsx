import P from 'prop-types';
import './styles.css';

export const TextInput = ({ onChange, value, type }) => {
  return (
    <input
      className="text-input"
      onChange={onChange}
      value={value}
      type={type}
      placeholder="type your search"
    />
  );
};

TextInput.propTypes = {
  value: P.string.isRequired,
  type: P.string.isRequired,
  onChange: P.func.isRequired
};
