import React from 'react';
import './Index.scss';
import classNames from "classnames"

const Button = ({ link, variant, size, children }) => (
  <a href={link} className={classNames('btn', variant, size)}>{children}</a>
);

export default Button
