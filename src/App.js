import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Update from './Update';
import ScoreMain from './score/ScoreMain';

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
        <Route exact={true} path="/memoryscripturescore" render={() => (
          <ScoreMain />
        )} />
      </Router>
    </div>
  );
}

export default App;
