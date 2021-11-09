import { Component } from 'react';
import s from './Modal.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  render() {
    const { onClickToggle } = this.props;
    return createPortal(
      <div className={s.overlay}>
        <div className={s.modal}>
          <h1>Mordalka</h1>
          <img src="" alt="" />
          <button type="button" onClick={onClickToggle}>
            Close
          </button>
        </div>
      </div>,
      modalRoot,
    );
  }
}
