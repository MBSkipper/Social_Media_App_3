import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

function Users() {
  const [users, setUsers] = useState([
    { 
      name: 'Anne', 
      email: 'anne@gmail.com',
      age: 25
    },
    { 
      name: 'Bob', 
      email: 'bob@gmail.com',
      age: 30
    }
  ])

  return (
    <>
      <h1 className='display-5'>Users</h1>
      <ListGroup>
        {users.map(user => (
          <ListGroup.Item>{user.name} | {user.email} | {user.age}</ListGroup.Item>
        ))}
      </ListGroup> 
    </>
  );
}

export default Users;