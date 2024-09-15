import React from 'react';
import './index.css';
const CardItem = props => {
  const {Item} = props;
  const {title, description, imgUrl, className} = Item;
  const newClassName = `common-card ${className}`;
  return (
    <li className={newClassName}>
      <div className="common-card">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="avatar" alt={title} />
      </div>
    </li>
  )
}

export default CardItem