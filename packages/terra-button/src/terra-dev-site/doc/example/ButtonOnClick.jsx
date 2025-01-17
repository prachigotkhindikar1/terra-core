import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonOnClick = () => (
  // eslint-disable-next-line no-alert
  <Button text="Click Me" onClick={() => alert('Ive been clicked!')} className={cx('button')} />
);

export default ButtonOnClick;
