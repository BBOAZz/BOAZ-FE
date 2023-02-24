import { media } from 'styles/mediaQuery';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import nextButton from 'assets/images/curriculum/recommendation/next-button.svg';
import previousButton from 'assets/images/curriculum/recommendation/previous-button.svg';
import RecommendationList from './RecommendationList/RecommendationList';
import { useState } from 'react';
import { ADD_SLIDER_SIZE, TRANSITON_TIME } from 'constants/slider';
import { useRecommendationQuery } from 'hooks/queries/curriculum/useRecommendation';

const CurriculumTrackRecommendationWrapper = styled.section`
    background: rgba(77, 47, 246, 0.05);
`;

const CurriculumTrackRecommendationContainer = styled.div`
    max-width: 1440px;
    padding: 7.2em 0 7.2em 2em;
    margin: 0 auto;
    ${media.tablet} {
        padding: 4em 0 4em 1em;
    }
    ${media.mobile} {
        padding: 4em 0 4em 0.35em;
    }
`;

const CurriculumTrackRecommendationTitle = styled.h1`
    color: #333333;
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: -0.02em;
    line-height: 150%;
    margin-right: 40px;
    & > span {
        color: #4d2ff6;
    }
    ${media.mobile} {
        margin-right: 0;
        margin-bottom: 40px;
        font-size: 1.8rem;
    }
`;

const SilderWrapper = styled.div`
    margin-top: 2em;
    overflow-x: hidden;
    overflow-y: hidden;
    ${media.mobile} {
        overflow-x: scroll;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

const CurriculumTrackRecommendationHeader = styled.div`
    display: flex;
    align-items: self-end;
    ${media.mobile} {
        display: flex;
        flex-direction: column;
        align-items: self-start;
        margin-left: 0.65em;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 130px;
`;

const PrevButton = styled.button`
    width: 50px;
    height: 50px;
    background: rgba(77, 47, 246, 0.1);
    border: 1px solid rgba(77, 47, 246, 0.8);
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    img {
        position: absolute;
        left: 25%;
        top: 21%;
    }
`;

const NextButton = styled.button`
    width: 50px;
    height: 50px;
    background: rgba(77, 47, 246, 0.1);
    border: 1px solid rgba(77, 47, 246, 0.8);
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    img {
        position: absolute;
        left: 35%;
        top: 21%;
    }
`;

interface CurriculumTrackRecommendationProps {
    recommendationTitle: string;
    trackId: number;
}
const CurriculumTrackRecommendation = ({ recommendationTitle, trackId }: CurriculumTrackRecommendationProps) => {
    const { data: recommendationList } = useRecommendationQuery(trackId);
    const recommendation_size = recommendationList?.payload.length - 1;
    const [currentSlide, setCurrentSlide] = useState(ADD_SLIDER_SIZE);
    const [transitionStyle, setTransitionStyle] = useState('');
    const handleSlide = (index: number) => {
        setCurrentSlide(currentSlide + index);
        setTransitionStyle(`all ${TRANSITON_TIME}ms ease-in-out`);
        if (currentSlide === recommendation_size + ADD_SLIDER_SIZE && index === 1) {
            setTimeout(() => {
                setTransitionStyle('');
                setCurrentSlide(ADD_SLIDER_SIZE);
            }, TRANSITON_TIME);
        } else if (currentSlide === ADD_SLIDER_SIZE && index === -1) {
            setTimeout(() => {
                setTransitionStyle('');
                setCurrentSlide(recommendation_size + ADD_SLIDER_SIZE);
            }, TRANSITON_TIME);
        }
    };

    return (
        <CurriculumTrackRecommendationWrapper>
            <CurriculumTrackRecommendationContainer>
                <CurriculumTrackRecommendationHeader>
                    <CurriculumTrackRecommendationTitle>
                        {recommendationTitle}의 <br /> <span>이야기</span>를 들어봐요
                    </CurriculumTrackRecommendationTitle>
                    <ButtonContainer>
                        <PrevButton onClick={() => handleSlide(-1)}>
                            <img src={previousButton} alt="이전 추천글 보기" />
                        </PrevButton>
                        <NextButton onClick={() => handleSlide(1)}>
                            <img src={nextButton} alt="다음 추천글 보기" />
                        </NextButton>
                    </ButtonContainer>
                </CurriculumTrackRecommendationHeader>
                <SilderWrapper>
                    <RecommendationList
                        currentSlide={currentSlide}
                        transitionStyle={transitionStyle}
                        recommendationList={recommendationList?.payload}
                    />
                </SilderWrapper>
            </CurriculumTrackRecommendationContainer>
        </CurriculumTrackRecommendationWrapper>
    );
};

export default CurriculumTrackRecommendation;
