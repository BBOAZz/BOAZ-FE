import { KEYS } from 'constants/reactQuery';
import { useQuery } from '@tanstack/react-query';
import { getRecommendation } from 'apis/curriculum/recommendation';

export const useRecommendationQuery = (trackId: number) => {
    const data = useQuery<any>([trackId, KEYS.RECOMMENDATION], () => getRecommendation(trackId));
    return data;
};
