import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = (props) => {
  const handleClick = () => {
    console.log('kliknuto');
    props.onSelected();
  };

  return (
    <div className="option" onClick={handleClick}>
      <Icon type={props.type} />
      <div>{props.text}</div>
    </div>
  );
};

export default Option;