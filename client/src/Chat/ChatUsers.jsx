import React from 'react';

var UserList = function(props) {
  return (
    <div>
      <h3>Players In Game</h3>
      <ul>
        {
          props.usernames.map((user,i) => {
            return(
              <li key={i}>{user}</li>
            )
          })

        }
      </ul>
    </div>
  )
}

export default UserList;
