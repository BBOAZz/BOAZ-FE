import { GET } from 'apis/api';

export const getRecruitment = async () => {
    const { data } = await GET('/recruitment');
    return data;
};
