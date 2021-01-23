import React from 'react';
import './index.scss';
import cx from "classnames"

const Button = ({ className }) => {
  <button
    className={ cx({
    [className]: className,
  })
);

export default Button
