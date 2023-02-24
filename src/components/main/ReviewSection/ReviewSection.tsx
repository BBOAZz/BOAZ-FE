import { media } from 'styles/mediaQuery';
import styled from 'styled-components';
import ReviewList from 'components/main/ReviewSection/ReviewList/ReviewList';
import nextButton from 'assets/images/main/next-button.svg';
import previousButton from 'assets/images/main/previous-button.svg';
import { useEffect, useState } from 'react';
import { ADD_SLIDER_SIZE, TRANSITON_TIME } from 'constants/slider';
import { useReviewsQuery } from 'hooks/queries/useReview';
import { Review } from 'types/review';
import ReviewPixelWrapper from 'components/main/ReviewSection/ReviewPixelWrapper';

const ReviewSectionWrapper = styled.section`
    background: linear-gradient(78.24deg, #4d2ff6 -2.74%, #a595ff 133.3%);
`;

const ReviewSectionContainer = styled.div`
    max-width: 1440px;
    padding: 7.2em 0 11.5em 2em;
    margin: 0 auto;
    ${media.tablet} {
        padding: 4em 0 4em 1em;
    }
    ${media.mobile} {
        padding: 4em 0 4em 0.35em;
    }
`;

const ReviewSectionTitle = styled.h1`
    color: white;
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: -0.02em;
    line-height: 150%;
    margin-right: 40px;
    & > span {
        color: #1efad2;
    }
    ${media.mobile} {
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

const ReviewSectionHeader = styled.div`
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
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid #ffffff;
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
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid #ffffff;
    border-radius: 25px;
    position: relative;
    cursor: pointer;
    img {
        position: absolute;
        left: 35%;
        top: 21%;
    }
`;

const ReviewSection = () => {
    const { data: reviewList } = useReviewsQuery();
    const [currentSlide, setCurrentSlide] = useState(ADD_SLIDER_SIZE);
    const [transitionStyle, setTransitionStyle] = useState('');
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const payload = reviewList?.payload ? [...reviewList.payload] : [];
        setReviews(payload);
    }, [reviewList]);

    const handleSlide = (index: number) => {
        setCurrentSlide(currentSlide + index);
        setTransitionStyle(`all ${TRANSITON_TIME}ms ease-in-out`);
        if (currentSlide === reviews?.length - 1 + ADD_SLIDER_SIZE && index === 1) {
            setTimeout(() => {
                setTransitionStyle('');
                setCurrentSlide(ADD_SLIDER_SIZE);
            }, TRANSITON_TIME);
        } else if (currentSlide === ADD_SLIDER_SIZE && index === -1) {
            setTimeout(() => {
                setTransitionStyle('');
                setCurrentSlide(reviews?.length - 1 + ADD_SLIDER_SIZE);
            }, TRANSITON_TIME);
        }
    };

    return (
        <ReviewPixelWrapper>
            <ReviewSectionWrapper>
                <ReviewSectionContainer>
                    <ReviewSectionHeader>
                        <ReviewSectionTitle>
                            수료자들의 <br /> 생생한 <span>활동 후기</span>
                        </ReviewSectionTitle>
                        <ButtonContainer>
                            <PrevButton onClick={() => handleSlide(-1)}>
                                <img src={previousButton} alt="이전 후기글 보기" />
                            </PrevButton>
                            <NextButton onClick={() => handleSlide(1)}>
                                <img src={nextButton} alt="다음 후기글 보기" />
                            </NextButton>
                        </ButtonContainer>
                    </ReviewSectionHeader>
                    <SilderWrapper>
                        <ReviewList currentSlide={currentSlide} transitionStyle={transitionStyle} reviews={reviews} />
                    </SilderWrapper>
                </ReviewSectionContainer>
            </ReviewSectionWrapper>
        </ReviewPixelWrapper>
    );
};

export default ReviewSection;
