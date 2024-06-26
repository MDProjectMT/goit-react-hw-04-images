import { useState } from 'react';
import styles from './Searchbar.module.scss';
import PropTypes from 'prop-types';
import image from '../../images/search.jpg';

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ev => {
    setInputValue(ev.target.value);
  };

  const handleSubmit = ev => {
    onSubmit(ev, inputValue);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.label}>
            <img src={image} alt="Loupe" width="14" height="14" />
          </span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmite: PropTypes.func,
};
