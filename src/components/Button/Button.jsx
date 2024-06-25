import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ onClick, page, images, isLoading }) => {
  if (page === 1 && images.length === 0 && isLoading !== false) {
    return null;
  }

  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      Load more...
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default Button;
