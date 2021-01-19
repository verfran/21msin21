import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import HomeKannada from './HomeKannada';
import Update from './Update';
import ScoreMain from './score/ScoreMain';
import { QueryClient, QueryClientProvider } from 'react-query'
import Correction from './Correction';
import FileUpload from './FileUpload';
import Stats from './Stats';

//import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Router>
          <Route exact={true} path="/" render={() => (
              <Home />
            )} />
            <Route exact={true} path="/Kannada" render={() => (
              <HomeKannada />
            )} />
            <Route exact={true} path="/update" render={() => (
              <Update />
            )} />
            <Route exact={true} path="/preview" render={() => (
              <Home showPreview="true" />
            )} />
            <Route exact={true} path="/MSScore" render={() => (
              <ScoreMain />
            )} />
            <Route exact={true} path="/MSFileUpload" render={() => (
              <FileUpload />
            )} />
            <Route exact={true} path="/MSCorrection" render={() => (
              <Correction />
            )} />
            <Route exact={true} path="/MSStats" render={() => (
              <Stats />
            )} />
          </Router>
        </div>
        {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      </QueryClientProvider>
    </>
  );
}

export default App;
