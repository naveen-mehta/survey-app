import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SurveyApp from './pages/index';
import './App.css';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path='/' component={SurveyApp}/>
      </Switch>
    </Router>
  )
}

export default App;

