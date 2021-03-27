import React from 'react'
import TotalCash from './TotalCashInOut'
import CashInOutBtn from './CashInOutBtn'
import History from './History'

const HomePage = () => {
    return (
        <>
            <TotalCash />
            <History />
            <CashInOutBtn />
        </>
    )
}

export default HomePage
