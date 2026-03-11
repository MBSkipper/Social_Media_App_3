import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {Container} from 'react-bootstrap';  

import Users from './components/Users';

function App() {

  return (
    <Container className='mt-5'>
      <Users />
    </Container>
  )
}

export default App

