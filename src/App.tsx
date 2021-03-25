import React from 'react'
import TotalCash from './components/TotalCashInOut';
import History from './components/History';

const App: React.FC = () => {
  return (
    <>
      <TotalCash />
      <History />
    </>
  )
}

export default App;
