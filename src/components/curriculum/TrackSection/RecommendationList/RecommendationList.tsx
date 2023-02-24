import { media } from 'styles/mediaQuery';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { ADD_SLIDER_SIZE } from 'constants/slider';
import defaultEmoji from 'assets/images/main/emoji_default.png';
import { Recommendation } from 'types/recommendation';

const RecommendationWrapper = styled.div`
    background-color: white;
    height: 445px;
    width: 345px;
    margin-right: 1em;
    ${media.tablet} {
        font-size: 20px;
    }
`;

const RecommendationContainer = styled.div`
    padding: 1.8em;
    font-size: 1em;
`;

const RecommendationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const RecommendationTitle = styled.div`
    font-size: 1.2em;
    font-weight: 600;
    color: #4d2ff6;
    letter-spacing: -0.03em;
    line-height: 140%;

    & > strong {
        color: #4d2ff680;
    }
`;

const ReviewImage = styled.img`
    width: 80px;
    height: 80px;
`;

const ReviewerWriter = styled.div`
    color: #4f4f4f;
    font-weight: 600;
    font-size: 0.9em;
    letter-spacing: -0.03em;
    line-height: 140%;
`;

const RecommendationContent = styled.div`
    font-size: 1em;
    color: #333;
    line-height: 165%;
    margin-top: 2em;
`;

const ReivewSlider = styled.div`
    display: flex;
    width: fit-content;
`;

interface ReviewListProps {
    currentSlide: number;
    transitionStyle: string;
    recommendationList: Recommendation[];
}

const RecommendationList = ({ currentSlide, transitionStyle, recommendationList }: ReviewListProps) => {
    const slideRef = useRef<HTMLInputElement>(null);
    const [infiniteRecommendationList, setInfiniteRecommendationList] = useState<Recommendation[]>([]);

    useEffect(() => {
        const addedFront = [];
        const addedLast = [];
        let index = 0;
        while (index < ADD_SLIDER_SIZE) {
            addedLast.push(recommendationList[index % recommendationList.length]);
            addedFront.unshift(recommendationList[recommendationList.length - 1 - (index % recommendationList.length)]);
            index++;
        }
        setInfiniteRecommendationList([...addedFront, ...recommendationList, ...addedLast]);
    }, [recommendationList]);

    useEffect(() => {
        if (slideRef.current != null) {
            slideRef.current.style.transition = transitionStyle;
            const moveX = currentSlide * 365;
            slideRef.current.style.transform = `translateX(-${moveX}px)`;
        }
    }, [currentSlide]);

    return (
        <ReivewSlider ref={slideRef}>
            {infiniteRecommendationList.map((recommendation, index) => (
                <RecommendationWrapper key={index}>
                    <RecommendationContainer>
                        <RecommendationHeader>
                            <div>
                                <RecommendationTitle>
                                    {recommendation.track} <strong> | {recommendation.year}</strong>
                                </RecommendationTitle>
                                <ReviewerWriter>{recommendation.writer}</ReviewerWriter>
                            </div>
                            <ReviewImage src={recommendation.emojiUrl ? recommendation.emojiUrl : defaultEmoji} />
                        </RecommendationHeader>
                        <RecommendationContent
                            dangerouslySetInnerHTML={{ __html: recommendation.content }}
                        ></RecommendationContent>
                    </RecommendationContainer>
                </RecommendationWrapper>
            ))}
        </ReivewSlider>
    );
};

export default RecommendationList;
