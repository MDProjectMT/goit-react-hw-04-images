import { useEffect } from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

export default function Modal({ isShow, image, closeModal }) {
  useEffect(() => {
    const handleKeyDown = ev => {
      if (ev.key === 'Escape') {
        closeModal();
      }
    };

    if (isShow) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isShow, closeModal]);

  const handleOverlayClick = ev => {
    if (ev.target === ev.currentTarget) {
      closeModal();
    }
  };

  if (!isShow) {
    return null;
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <img
          src={image.largeImageURL}
          alt={image.tags}
          width={'800px'}
          height={'600px'}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
