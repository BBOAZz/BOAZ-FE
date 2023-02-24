import styled from 'styled-components';
import lottie from 'lottie-web';
import warningGif from 'assets/images/notFound/warning.json';
import arrowLeft from 'assets/images/notFound/arrow-left.svg';
import frame from 'assets/images/notFound/frame.svg';
import { useEffect, useRef } from 'react';
import { media } from 'styles/mediaQuery';
import { useNavigate } from 'react-router-dom';

const NotFoundPageWrapper = styled.section`
    background: linear-gradient(287.54deg, #5036f6 -0.1%, #8a31f4 100%);
    ${media.mobile} {
        background: linear-gradient(0deg, #5036f6 -0.1%, #8a31f4 100%);
    }
`;

const NotFoundPageContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2em;
    height: 100%;
    display: flex;
    color: white;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    ${media.mobile} {
        padding: 0 1em;
        justify-content: center;
    }
`;

const FirstFrame = styled.img`
    width: 162px;
    height: 162px;
    margin-top: 20vh;
    ${media.mobile} {
        display: none;
    }
`;
const SecondFrame = styled.img`
    width: 162px;
    height: 162px;
    margin-top: 50vh;
    ${media.mobile} {
        display: none;
    }
`;

const NotFoundContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8em 0;
    ${media.mobile} {
        margin: 10em 0;
    }
    & > h1 {
        font-size: 4rem;
    }
    & > h2 {
        font-size: 1.9rem;
        line-height: 155%;
        font-weight: 600;
        margin-top: 0.8em;
        ${media.mobile} {
            font-size: 1.5rem;
        }
    }
    & > h3 {
        font-size: 1.5rem;
        line-height: 155%;
        margin-bottom: 0.3em;
        font-weight: 400;
        ${media.mobile} {
            font-size: 1rem;
            margin-bottom: 0.5em;
        }
    }
    & > p {
        color: #ebebeb;
        line-height: 155%;
        font-size: 0.9rem;
        font-weight: 400;
        ${media.mobile} {
            font-size: 0.8rem;
        }
    }
`;

const WaringWrapper = styled.div`
    width: 200px;
    height: 200px;
`;

const Waring = styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: absolute;
    margin: 0 auto;
    svg {
        path[stroke='rgb(0,0,0)'] {
            stroke: rgb(256, 256, 256);
        }
    }
`;

const HomeButtonWarpper = styled.div`
    margin-top: 1.5em;
    width: 180px;
    height: 50px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    & > button {
        gap: 5px;
        color: #ffffff;
        background: #000000;
        font-size: 0.9rem;
        border: none;
        cursor: pointer;
    }
    ${media.mobile} {
        width: 100%;
    }
`;

const NotFound = () => {
    const warningContainer = useRef<HTMLImageElement>(null);
    const navigateTo = useNavigate();

    const handleClickHome = () => {
        navigateTo('/');
    };

    useEffect(() => {
        if (warningContainer.current) {
            lottie.loadAnimation({
                container: warningContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: warningGif,
            });
        }
    }, []);

    return (
        <NotFoundPageWrapper>
            <NotFoundPageContainer>
                <FirstFrame src={frame} />
                <NotFoundContent>
                    <WaringWrapper>
                        <Waring ref={warningContainer} />
                    </WaringWrapper>
                    <h1>404</h1>
                    <h2>죄송합니다.</h2>
                    <h3>원하시는 페이지를 찾을 수 없습니다.</h3>
                    <p>
                        찾으려는 페이지의 주소 변경 혹은 삭제로 인해 페이지를 찾을 수 없습니다.
                        <br />
                        입력하신 주소가 정확한지 다시 한 번 확인해 주시기 바랍니다.
                    </p>
                    <HomeButtonWarpper onClick={handleClickHome}>
                        <img src={arrowLeft} alt="" />
                        <button>BOAZ 홈으로</button>
                    </HomeButtonWarpper>
                </NotFoundContent>
                <SecondFrame src={frame} />
            </NotFoundPageContainer>
        </NotFoundPageWrapper>
    );
};

export default NotFound;
