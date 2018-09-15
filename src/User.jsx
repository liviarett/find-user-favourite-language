import React from 'react';

const User = ({ fields }) => {
  return (
    <ul className="user-info-wrapper">
      {fields.map((field, index) => (
        <li key={index}>
          <span className="field-title" >{field.title}</span>
          <span className="field-value" >{field.value}</span>
        </li>))}
    </ul>
)}

export default User;