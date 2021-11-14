import PropTypes from 'prop-types';
import css from './IconButton.module.css';

const IconButton = ({ children, onClick }) => (
  <button type="button" className={css.IconButton} onClick={onClick}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default IconButton;