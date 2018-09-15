import React from 'react';
import User from './User';
import Avatar from './Avatar';

const UserWrapper = ({ userInfo }) => {
  const fields = [
    {
      key: 'blog',
      title: 'Personal Website',
      handler: (value) => value
    },{
      key: 'company',
      title: 'Company',
      handler: (value) => value
    },{
      key: 'hireable',
      title: 'Looking for a job',
      handler: (value) => value ? 'Yes' : 'No'
    }, {
      key: 'memberSince',
      title: 'Member since',
      handler: (value) => new Date(value).toLocaleDateString().replace(/\//g, '.')
    }, {
      key: 'name',
      title: 'Name',
      handler: (value) => value

    }, {
      key: 'numberOfRepos',
      title: 'Number of public repos',
      handler: (value) => value

    }, {
      key: 'username',
      title: 'Username',
      handler: (value) => value
    }, {
      key: 'url',
      title: 'Profile',
      handler: (value) => <a href={value}>{value}</a>
    }
  ]

  const formattedFields = fields.map(field => ({ title: field.title, value: field.handler(userInfo[field.key]) }))
  const formattedFavouriteLanguage = [{ title: 'Favourite Language', value: userInfo.favouriteLanguage }];

  return (
    <div className='user-wrapper'>
      <Avatar url={userInfo.avatarUrl} name={userInfo.name} />
      <User fields={formattedFields.concat(formattedFavouriteLanguage)} />
    </div>
)}

export default UserWrapper;