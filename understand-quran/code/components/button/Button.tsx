import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { ChangeHandler } from '@utils/react-utils';

import styles from './button.module.scss';

export type Props = {
  onClick: () => void
  text: string,
};

const Button: FC<Props> = ({ onClick, text }) => (
  <button
    className={styles['uq-Button']}
    onClick={ChangeHandler.getClickHandler(onClick)}
    type="button"
  >
    <span className={styles['uq-Button-text']}>
      <strong>
        {text}
      </strong>
    </span>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
