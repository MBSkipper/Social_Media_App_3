import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

function Users() {
  const [users, setUsers] = useState([
    { 
      name: 'Anne', 
      email: 'anne@gmail.com',
      age: 17
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
          <ListGroup.Item variant={user.age >= 18 ? "success" : "danger"} >
            {user.name} | {user.email} | {user.age}</ListGroup.Item>
        ))}
      </ListGroup> 
    </>
  );
}

export default Users;