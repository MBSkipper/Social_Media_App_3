import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Container } from 'react-bootstrap';  

import Users from './components/Users.jsx';
import AddUser from './components/AddUser.jsx';

function App() {

  return (
    <Container className="mt-1">
      <Users />
      <AddUser />
    </Container>
  )
}

export default App

