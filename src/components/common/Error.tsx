import styled from 'styled-components';
import lottie from 'lottie-web';
import alarmGif from 'assets/images/error/alarm.json';
import arrowRight from 'assets/images/error/arrow-right.svg';
import frame from 'assets/images/notFound/frame.svg';
import kakaoIcon from 'assets/images/footer/kakao.svg';
import { useEffect, useRef } from 'react';
import { media } from 'styles/mediaQuery';

const ErrorBoundaryWrapper = styled.section`
    background: linear-gradient(287.54deg, #5036f6 -0.1%, #8a31f4 100%);
    ${media.mobile} {
        background: linear-gradient(0deg, #5036f6 -0.1%, #8a31f4 100%);
    }
`;

const ErrorBoundaryContainer = styled.div`
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

const ErrorContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 11em 0;
    ${media.mobile} {
        margin: 13em 0;
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

const KakaoButtonWrapper = styled.div`
    margin-top: 1.5em;
    width: 240px;
    height: 50px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.8em;
    border-radius: 5px;
    & > button {
        gap: 5px;
        color: #ffffff;
        background: #000000;
        font-size: 0.9rem;
        border: none;
        cursor: pointer;
        margin-right: 1.5em;
    }
    ${media.mobile} {
        width: 90%;
    }
`;

const Error = () => {
    const warningContainer = useRef<HTMLImageElement>(null);
    const handleClickKaKao = () => {
        location.href = 'https://pf.kakao.com/_xeaCBK';
    };

    useEffect(() => {
        if (warningContainer.current) {
            lottie.loadAnimation({
                container: warningContainer.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: alarmGif,
            });
        }
    }, []);

    return (
        <ErrorBoundaryWrapper>
            <ErrorBoundaryContainer>
                <FirstFrame src={frame} />
                <ErrorContent>
                    <WaringWrapper>
                        <Waring ref={warningContainer} />
                    </WaringWrapper>
                    <h2>잠시 후 다시 확인해주세요!</h2>
                    <p>
                        지금 이 서비스와 연결할 수 없습니다.
                        <br />이 상황이 지속될 시 카카오톡 버튼을 눌러 문의해 주세요!
                    </p>
                    <KakaoButtonWrapper onClick={handleClickKaKao}>
                        <img src={kakaoIcon} alt="카카오톡 이미지" />
                        <button>카카오톡 바로가기</button>
                        <img src={arrowRight} alt="" />
                    </KakaoButtonWrapper>
                </ErrorContent>
                <SecondFrame src={frame} />
            </ErrorBoundaryContainer>
        </ErrorBoundaryWrapper>
    );
};

export default Error;
