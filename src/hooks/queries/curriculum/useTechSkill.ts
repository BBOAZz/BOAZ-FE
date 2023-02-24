import { KEYS } from 'constants/reactQuery';
import { useQuery } from '@tanstack/react-query';
import { getTechSkill } from 'apis/curriculum/techSkill';

export const useTechSkillQuery = (trackId: number) => {
    const data = useQuery<any>([trackId, KEYS.TECHSKILL], () => getTechSkill(trackId));
    return data;
};
