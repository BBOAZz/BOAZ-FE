import { GET } from 'apis/api';

export const getTechSkill = async (trackId: number) => {
    const { data } = await GET(`/curriculum/skills/${trackId}`);
    return data;
};
