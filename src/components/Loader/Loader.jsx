import styles from './Loader.module.scss';
import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return <span className={styles.loader}></span>;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
