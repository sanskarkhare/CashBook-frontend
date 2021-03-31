import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CashInPage from './components/CashInPage';
import HomePage from './components/HomePage';
import CashOutPage from './components/CashOutPage';
import { AppProvider } from './context/GlobalState'



const App: React.FC = () => {

  return (
    <>
      
     <AppProvider>
          <Router>
              <Switch>
                <Route path="/" exact render={() => <HomePage />} />
                <Route path="/CashInPage" exact render={() => <CashInPage />} />
                <Route path="/CashOutPage" exact render={() => <CashOutPage />} />
              </Switch>
            </Router>
      </AppProvider>
    </>
  )
}

export default App;
