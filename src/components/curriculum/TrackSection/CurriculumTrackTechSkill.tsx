import styled from 'styled-components';
import { media } from 'styles/mediaQuery';
import { useTechSkillQuery } from 'hooks/queries/curriculum/useTechSkill';

const Skill = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    background: white;

    & > h1 {
        margin: 20px 0;
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 260x;
        text-align: center;
        letter-spacing: -0.02em;

        color: #333333;
    }

    ${media.mobile} {
        & > h1 {
            margin-top: 0;
        }
    }
`;

const TechSkillsContainer = styled.section`
    display: flex;
`;

const TechSkillContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-right: 1.5em;

    &:last-child {
        margin-right: 0px;
    }

    ${media.mobile} {
        margin-right: 0.7em;
    }
`;

const SkillImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 80px;
    height: 80px;

    & > img {
        margin-right: 1.5em;

        &:last-child {
            margin-right: 0px;
        }
    }

    & > section {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
    }

    ${media.mobile} {
        width: 56px;
        height: 56px;
        & > img {
            margin-right: 0.5em;
        }
    }
`;

const TechInfo = styled.p`
    height: 22px;

    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    text-align: center;
    letter-spacing: -0.02em;
    color: #828282;

    ${media.mobile} {
        font-size: 0.7rem;
    }
`;

interface CurriculumTabTechSkillProps {
    trackId: number;
}
const CurriculumTarckTechSkill = ({ trackId }: CurriculumTabTechSkillProps) => {
    const { data: techSkills } = useTechSkillQuery(trackId);
    return (
        <Skill>
            <h1>ㆍ기술 스택ㆍ</h1>
            <TechSkillsContainer>
                {techSkills?.payload.map((techSkill: any) => {
                    return (
                        <TechSkillContainer key={techSkill.name}>
                            <SkillImg>
                                {techSkill.logoUrl ? (
                                    <img alt={techSkill.name} src={techSkill.logoUrl}></img>
                                ) : (
                                    <section />
                                )}
                            </SkillImg>
                            <TechInfo>{techSkill.name}</TechInfo>
                        </TechSkillContainer>
                    );
                })}
            </TechSkillsContainer>
        </Skill>
    );
};

export default CurriculumTarckTechSkill;
