import React from 'react'
import { InBtn, OutBtn, Wrapper } from './index.styles';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';





const CashInOutBtn: React.FC = () => {
    return (
        <>
            <Wrapper>
                <InBtn onClick={() => (window.location.pathname='/CashInPage')}>
                    <ImArrowUp />
                    Cash In
                </InBtn>
                
                <OutBtn onClick={() => (window.location.pathname='/CashOutPage')}>
                    <ImArrowDown />
                    Cash Out
                </OutBtn>
            </Wrapper>
        </>
    )
}

export default CashInOutBtn;
