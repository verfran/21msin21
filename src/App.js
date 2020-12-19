import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Update from './Update';
import Score from './Score';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact={true} path="/" render={() => (
          <Home />
        )} />
        <Route exact={true} path="/update" render={() => (
          <Update />
        )} />
        <Route exact={true} path="/preview" render={() => (
          <Home showPreview="true"/>
        )} />
        <Route exact={true} path="/momoryscripturescore" render={() => (
          <Score />
        )} />
      </Router>
    </div>
  );
}

export default App;
