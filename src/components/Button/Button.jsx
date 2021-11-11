import s from './Button.module.scss';

import React from 'react';

export default function Button({ onClickBtn }) {
  return (
    <button className={s.Button} type="button" onClick={() => onClickBtn()}>
      Load more
    </button>
  );
}
