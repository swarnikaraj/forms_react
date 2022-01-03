import logo from './logo.svg';
import './App.css';
import {Form} from './components/form'
import {Table} from './components/table'
import styled from 'styled-components'

const Tableparent=styled.div`
   border:2px solid green;

}
`

function App() {
  return (
    <div className="App">
     <Form/>

     <Tableparent>
       <Table/>
       </Tableparent>
    </div>
  );
}

export default App;
