import { useState } from 'react';
import './App.css';
import Home from './component/Home';
import TableData from './component/Table';

const App = () => {
  // const [state , setState] = useState({
  //   title:"sdfsdf"
  // });
  return (
    <div className="App">
    <h1>Table Task</h1>
      {/* <Home state={state} setState={setState}/> */}
      <TableData />
    </div>
  );
}

export default App;
