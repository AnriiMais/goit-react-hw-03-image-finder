import s from './Button.module.scss';

import React from 'react';

export default function Button() {
  return (
    <button className={s.Button} type="button">
      Load more
    </button>
  );
}
