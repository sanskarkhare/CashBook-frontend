import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CashInPage from './components/CashInPage';
import HomePage from './components/HomePage';
import CashOutPage from './components/CashOutPage';
import GlobalProvider from './context/store';


const App: React.FC = () => {

  return (
    <>
      
        <GlobalProvider>
          <Router>
              <Switch>
                <Route path="/" exact render={() => <HomePage />} />
                <Route path="/CashInPage" exact render={() => <CashInPage />} />
                <Route path="/CashOutPage" exact render={() => <CashOutPage />} />
              </Switch>
            </Router>
          </GlobalProvider>

    </>
  )
}

export default App;
