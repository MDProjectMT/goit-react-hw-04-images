import React from 'react';
import styles from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

// key={image.id} nie powinno być bo powinien być ustawiony na poziomie listy gdzie jest renderowany

export default function ImageGalleryItem({ image, openModal }) {
  function handleClick() {
    openModal(image);
  }

  return (
    <li className={styles.item} onClick={handleClick}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        width={'100%'}
        height={'100%'}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
