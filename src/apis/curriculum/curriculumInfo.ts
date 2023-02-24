import { GET } from 'apis/api';

export const getCurriculumInfo = async (trackId: number) => {
    const { data } = await GET(`/curriculum/${trackId}`);
    return data;
};
