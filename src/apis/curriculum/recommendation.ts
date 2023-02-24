import { GET } from 'apis/api';

export const getRecommendation = async (trackId: number) => {
    const { data } = await GET(`/curriculum/suggestion/${trackId}`);
    return data;
};
