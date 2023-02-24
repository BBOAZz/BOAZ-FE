import styled from 'styled-components';
import { media } from 'styles/mediaQuery';
import CurriculumBannerPixelWrapper from './CurriculumBannerPixelWrapper';

const CurriculumBannerWrapper = styled.div`
    padding-top: 190px;
    margin-left: 6.9em;
    display: block;
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 140%;
    color: #ffffff;
    letter-spacing: -0.02em;
    & > strong {
        color: #1efad2;
    }
    & > span {
        display: block;
    }
    ${media.mobile} {
        font-size: 1.8rem;
        margin-left: 20px;
        text-align: left;
        & > strong {
            display: block;
        }
    }
`;

const CurriculumBannerBackground = styled.div`
    height: 27.5rem;
    background: linear-gradient(78.24deg, #4d2ff6 -2.74%, #a595ff 133.3%);
`;

const CurriculumBannerSection = () => {
    return (
        <CurriculumBannerPixelWrapper>
            <CurriculumBannerBackground>
                <CurriculumBannerWrapper>
                    보아즈만의<strong> 특화된 커리큘럼,</strong> <span />
                    특별한 여정에 함께해요
                </CurriculumBannerWrapper>
            </CurriculumBannerBackground>
        </CurriculumBannerPixelWrapper>
    );
};
export default CurriculumBannerSection;
