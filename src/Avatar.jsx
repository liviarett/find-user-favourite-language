import React from 'react';

const Avatar = ({url, name}) => (
  <span className='avatar'>
  <img src={url} alt={name} title={name}/>
</span>
);

export default Avatar;