import Homepage from './components/homepage/Homepage'
import { Switch, Route } from 'react-router-dom';
import Slider from './components/slider/Slider'
function App() {
  return (
        <div className="App">
          <Switch>
            <Route path="/" >
            <Homepage />
            </Route>
          </Switch>
          <Slider />
        </div>
  );
}

export default App;
