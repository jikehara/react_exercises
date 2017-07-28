import React from 'react';

const UsersList = (props) => {
  return (
    <div>
      <h1> Found user list: </h1>

      <div className='user-card-container'>
        {
          props.usersData.map((user, index) => (
            <div key={index} className="user-card">
              <h3>{user.firstName} {user.lastName}</h3>
              <img src={user.img}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UsersList;
