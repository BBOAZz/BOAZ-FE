import { PROCESS_LIST } from 'constants/processList';
import React from 'react';
import styled from 'styled-components';
import { media } from 'styles/mediaQuery';

const ProcessListContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1em auto 4em;
    ${media.mobile} {
        flex-direction: column;
        margin: 1em auto 0;
    }
`;

const ProcessBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 290px;
    height: 142px;
    ${media.mobile} {
        align-items: center;
        height: 166px;
        width: 100%;
        margin-bottom: 2em;
    }
`;

const ProcessStep = styled.div`
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.4rem;
    letter-spacing: -0.02em;
    margin-bottom: 1em;
    ${media.mobile} {
        font-size: 1.5rem;
    }
`;

const ProcessTitle = styled.div`
    color: #1efad2;
    font-size: 1rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.8em;
    ${media.mobile} {
        font-size: 1.2rem;
    }
`;

const ProcessDetail = styled.div`
    color: white;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 150%;
    height: 48px;
    word-break: keep-all;
    ${media.mobile} {
        font-size: 1.1rem;
        height: 66px;
        text-align: center;
        word-break: keep-all;
    }
`;

const Line = styled.div`
    width: 1px;
    height: 160px;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 0 2em;
    ${media.mobile} {
        display: none;
    }
`;

const ProcessList = () => {
    return (
        <ProcessListContainer>
            {PROCESS_LIST.map((process, index) => (
                <React.Fragment key={index}>
                    <ProcessBox>
                        <ProcessStep>{process.STEP}</ProcessStep>
                        <ProcessTitle>{process.TITLE}</ProcessTitle>
                        <ProcessDetail>{process.DESCIPTION}</ProcessDetail>
                    </ProcessBox>
                    {index !== PROCESS_LIST.length - 1 && <Line />}
                </React.Fragment>
            ))}
        </ProcessListContainer>
    );
};

export default ProcessList;
