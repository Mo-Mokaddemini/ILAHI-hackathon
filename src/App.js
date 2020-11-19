import './App.css';
import Message from './components/Message/Message';
// import Homepage from './components/homepage/Homepage'
// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Message />
      {/* <Switch>
        <Route path="/" >
        <Homepage />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
