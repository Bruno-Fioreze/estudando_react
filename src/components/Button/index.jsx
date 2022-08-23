import P from 'prop-types';
import './styles.css';

export const Button = ({ onClick, children, disabled = false }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  children: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool
};
