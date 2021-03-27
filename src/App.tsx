import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CashInPage from './components/CashInPage';
import HomePage from './components/HomePage';
import CashOutPage from './components/CashOutPage';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/CashInPage" exact render={() => <CashInPage />} />
        <Route path="/CashOutPage" exact render={() => <CashOutPage />} />
      </Switch>
    </Router>
    </>
  )
}

export default App;
