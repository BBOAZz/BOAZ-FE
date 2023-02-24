import { KEYS } from 'constants/reactQuery';
import { useQuery } from '@tanstack/react-query';
import { getRecruitment } from 'apis/recruitment';

export const useRecruitmentQuery = () => {
    const data = useQuery<any>([KEYS.RECRUITMENT], () => getRecruitment());
    return data;
};
