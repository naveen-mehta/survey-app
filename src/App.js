import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import './App.css';

function App() {
  return (
    <Router >
      <Switch>
        <Route exact path='/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;


//<Route path='/admin/surveylist' component={SurveyList} />
//<Route path='/admin/surveydetails' component={SurveyDetails} />