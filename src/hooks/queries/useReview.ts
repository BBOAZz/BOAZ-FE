import { KEYS } from 'constants/reactQuery';
import { useQuery } from '@tanstack/react-query';
import { getReviews } from 'apis/review';
import { Review } from 'types/review';

interface ReviewResponseBody {
    payload: Review[];
}

export const useReviewsQuery = () => {
    const data = useQuery<ReviewResponseBody>([KEYS.REVIEWS], () => getReviews());
    return data;
};
