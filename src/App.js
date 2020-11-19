import Homepage from './components/homepage/Homepage'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
        <div className="App">
          <Switch>
            <Route path="/" >
            <Homepage />
            </Route>
          </Switch>
        </div>
  );
}

export default App;
