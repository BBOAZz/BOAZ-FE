import { GET } from 'apis/api';

export const getReviews = async () => {
    const { data } = await GET('/reviews');
    return data;
};
