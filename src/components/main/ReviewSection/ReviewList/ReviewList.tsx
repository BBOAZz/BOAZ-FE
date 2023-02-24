import { media } from 'styles/mediaQuery';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { ADD_SLIDER_SIZE } from 'constants/slider';
import defaultEmoji from 'assets/images/main/emoji_default.png';
import { Review } from 'types/review';

const ReviewWrapper = styled.div`
    background-color: white;
    height: 445px;
    width: 345px;
    margin-right: 1em;
    ${media.tablet} {
        font-size: 20px;
    }
`;

const ReviewContainer = styled.div`
    padding: 1.8em;
    font-size: 1em;
`;

const ReviewHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ReviewTitle = styled.div`
    font-size: 1.2em;
    font-weight: 600;
    min-height: 70px;
    color: #333;
    margin-bottom: 0.6em;
    letter-spacing: -0.03em;
    line-height: 140%;
`;

const ReviewImage = styled.img`
    width: 80px;
    height: 80px;
`;

const ReviewerWriter = styled.div`
    color: #828282;
    font-size: 0.8em;
    letter-spacing: -0.03em;
    line-height: 140%;
`;

const ReviewContent = styled.div`
    font-size: 1em;
    color: #333;
    line-height: 165%;
    margin-top: 2em;
    & > strong {
        color: #4d2ff6;
        font-weight: 400;
    }
`;

const ReivewSlider = styled.div`
    display: flex;
    width: fit-content;
`;

interface ReviewListProps {
    currentSlide: number;
    transitionStyle: string;
    reviews: Review[];
}

const ReviewList = ({ currentSlide, transitionStyle, reviews = [] }: ReviewListProps) => {
    const slideRef = useRef<HTMLInputElement>(null);
    const [infiniteReviewList, setInfiniteReviewList] = useState<Review[]>([]);

    useEffect(() => {
        const addedFront = [];
        const addedLast = [];
        let index = 0;
        while (index < ADD_SLIDER_SIZE && reviews.length > 0) {
            addedLast.push(reviews[index % reviews.length]);
            addedFront.unshift(reviews[reviews.length - 1 - (index % reviews.length)]);
            index++;
        }
        setInfiniteReviewList([...addedFront, ...reviews, ...addedLast]);
    }, [reviews]);

    useEffect(() => {
        if (slideRef.current != null) {
            slideRef.current.style.transition = transitionStyle;
            const moveX = currentSlide * 365;
            slideRef.current.style.transform = `translateX(-${moveX}px)`;
        }
    }, [currentSlide]);

    return (
        <ReivewSlider ref={slideRef}>
            {infiniteReviewList.map((review, index) => (
                <ReviewWrapper key={index}>
                    <ReviewContainer>
                        <ReviewHeader>
                            <div>
                                <ReviewTitle>
                                    {review.company} <br /> {review.job}
                                </ReviewTitle>
                                <ReviewerWriter>
                                    {review.track} {review.year} | {review.writer}
                                </ReviewerWriter>
                            </div>
                            <ReviewImage src={review.imageUrl ? review.imageUrl : defaultEmoji} />
                        </ReviewHeader>
                        <ReviewContent dangerouslySetInnerHTML={{ __html: review.contents }}></ReviewContent>
                    </ReviewContainer>
                </ReviewWrapper>
            ))}
        </ReivewSlider>
    );
};

export default ReviewList;
