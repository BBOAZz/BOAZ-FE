import styled from 'styled-components';
import mainBannerImage from 'assets/images/main/main_banner.svg';
import { media } from 'styles/mediaQuery';
import { useNavigate } from 'react-router-dom';
import BannerPixelWrapper from 'components/main/BannerSection/BannerPixelWrapper';

const BannerSectionWrapper = styled.section`
    background: linear-gradient(78.24deg, #4d2ff6 -2.74%, #a595ff 133.3%);
`;

const MainImgWrapper = styled.div`
    width: 524px;
    height: 126px;
    ${media.tablet} {
        width: 400px;
        height: 96px;
    }
    ${media.mobile} {
        width: 250px;
        height: 60px;
    }
`;

const BannerSectionContainer = styled.div`
    max-width: 1440px;
    padding: 7.8em 2em 15em;
    margin: 0 auto;
    ${media.tablet} {
        img {
            max-width: 400px;
        }
    }
    ${media.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            max-width: 250px;
        }
    }
`;

const BannerSlogan = styled.div`
    margin-bottom: 1.5em;
    font-size: 1.2rem;
    line-height: 1.5em;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: -0.02em;
    b {
        color: rgba(255, 255, 255);
    }
`;

const BannerSectionTitle = styled.h1`
    font-weight: 700;
    font-size: 2.1rem;
    color: white;
    letter-spacing: -0.02em;
    line-height: 140%;
    margin-left: 32px;
    & > strong {
        color: #1efad2;
    }
    ${media.mobile} {
        margin-top: 30px;
        margin-left: 0;
        text-align: center;
    }
`;

const ApplyButton = styled.button`
    margin-top: 4em;
    padding: 0.8em 1.6em;
    font-size: 0.9rem;
    letter-spacing: -0.03em;
    background-color: #1efad2;
    border-radius: 5px;
    border: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;

const ApplyDisableContainer = styled.div`
    & > p {
        color: white;
        font-size: 0.9rem;
        margin-top: 0.5em;
    }
    ${media.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > p {
            font-size: 0.72rem;
        }
    }
`;

const ApplyDisableButton = styled.button`
    margin-top: 4em;
    padding: 0.7em 2em;
    font-size: 0.9rem;
    letter-spacing: -0.03em;
    background-color: #cac1ff;
    border-radius: 5px;
    border: none;
    color: #573bf7;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    ${media.mobile} {
        flex-direction: column;
    }
`;

const BannerSection = ({ isRecruitment }: { isRecruitment: boolean }) => {
    const navigateTo = useNavigate();

    const handleApplyButton = () => {
        navigateTo('/recruitment');
    };

    return (
        <BannerPixelWrapper>
            <BannerSectionWrapper>
                <BannerSectionContainer>
                    <BannerSlogan>
                        <b>B</b>ig Data is <b>O</b>ur <b>A </b>to <b>Z</b>
                    </BannerSlogan>
                    <BannerContainer>
                        <MainImgWrapper>
                            <img src={mainBannerImage} alt="보아즈 배너 이미지" />
                        </MainImgWrapper>
                        <BannerSectionTitle>
                            국내 최초 <br /> <strong>빅데이터</strong> 동아리
                        </BannerSectionTitle>
                    </BannerContainer>
                    {isRecruitment ? (
                        <ApplyButton onClick={handleApplyButton}> 지금 지원하기 </ApplyButton>
                    ) : (
                        <ApplyDisableContainer>
                            <ApplyDisableButton disabled>지금은 모집 기간이 아니에요</ApplyDisableButton>
                            <p>하반기 공개모집 - 6월 중 상반기 공개모집 - 12월 중</p>
                        </ApplyDisableContainer>
                    )}
                </BannerSectionContainer>
            </BannerSectionWrapper>
        </BannerPixelWrapper>
    );
};

export default BannerSection;
