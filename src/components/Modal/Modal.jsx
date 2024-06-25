import { Component } from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ev => {
    if (ev.key === 'Escape') {
      this.props.closeModal();
    }
  };

  handleOverlayClick = ev => {
    if (ev.target === ev.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { isShow, image } = this.props;

    if (!isShow) {
      return null;
    }
    return (
      <div className={styles.overlay} onClick={this.handleOverlayClick}>
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
}

Modal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
