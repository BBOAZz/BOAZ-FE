import { KEYS } from 'constants/reactQuery';
import { useQuery } from '@tanstack/react-query';
import { getCurriculumInfo } from 'apis/curriculum/curriculumInfo';

export const useCurriculumInfoQuery = (trackId: number) => {
    const data = useQuery<any>([trackId, KEYS.CURRICULUMIFNO], () => getCurriculumInfo(trackId));
    return data;
};
