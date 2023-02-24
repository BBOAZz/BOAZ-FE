import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
    height: calc(100vh - 210px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingWrapper = styled.div`
    width: 517px;
    height: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
        color: #e0e0e0;
        font-size: 1.6rem;
        font-weight: 400;
        margin-top: 2em;
    }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
    height: 80px;
    width: 80px;
    background: linear-gradient(90deg, #1efad2 0%, #4d2ff6 100%);
    border-radius: 50%;
    position: relative;
    animation: ${spin} 1.5s linear infinite;
    &:before {
        position: absolute;
        content: '';
        height: 68px;
        width: 68px;
        background-color: white;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingWrapper>
                <Loader />
                <p>Big Data is our A to Z</p>
            </LoadingWrapper>
        </LoadingContainer>
    );
};

export default Loading;
