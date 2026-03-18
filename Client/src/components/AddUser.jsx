import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddUser() {
  return (
    <div className='mt-5'>
      <h1 className='display-6'>Add User</h1>
      <Form className='mt-5'>

        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Add
        </Button>
      </Form>
    </div>
  )
  
}

export default AddUser;