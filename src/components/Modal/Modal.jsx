import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ReactComponent as CloseBtn } from '../../images/cross.svg';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    onClickToggle: PropTypes.func.isRequired,
  };
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyPress);
  };
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyPress);
  };
  handleKeyPress = e => {
    if (e.code === 'Escape') {
      this.props.onClickToggle();
    }
  };
  handleClickOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.onClickToggle();
    }
  };
  render() {
    const { onClickToggle, modalImageUrl } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.handleClickOverlay}>
        <div className={s.modal}>
          <img src={modalImageUrl} alt="" className={s.modalImage} />
          <button
            type="button"
            className={s.modalBtnClose}
            onClick={onClickToggle}
          >
            <CloseBtn />
          </button>
        </div>
      </div>,
      modalRoot,
    );
  }
}
