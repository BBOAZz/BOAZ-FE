import styled from 'styled-components';
import { CurriculumTrackInfoProps } from 'types/curriculumInfo';
import { CURRICULUM_INFO } from 'constants/curriculumInfo';

const CurriculumTrackInfo = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    padding: 3em 2em;
    margin: 0 auto;

    & > h1 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 48px;
        letter-spacing: -0.02em;
        color: #333333;
        margin-bottom: 40px;
    }

    & > p {
        width: 100%;
        font-weight: 400;
        font-size: 1rem;
        line-height: 165%;

        text-align: center;
        letter-spacing: -0.05em;

        color: #4f4f4f;
        margin-top: 41px;
    }

    @media (max-width: 1023px) {
        display: none;
    }
`;

const Step = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 18px;
    margin-bottom: 8px;

    width: 106px;
    height: 41px;
    border: none;
    border-radius: 49px;

    font-weight: 600;
    font-size: 1rem;
    line-height: 145%;

    text-align: center;
    letter-spacing: -0.05em;
    background: rgba(77, 47, 246, 0.15);
    color: rgba(77, 47, 246, 0.7);
`;

const CurriculumInfoContainer = styled.article`
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CurriculumInfoDetail = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    margin-top: 30px;
    height: 422px;

    width: 100%;
    background: rgba(77, 47, 246, 0.05);
    border-radius: 0px 0px 4px 4px;

    padding-top: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    word-break: keep-all;
`;

const StepWeekWrapper = styled.article<StepWeekProps>`
    display: flex;
    align-items: flex-start;
    width: 294px;
    margin-bottom: 12px;
    color: #333333;

    & > div {
        width: 0.25em;
        height: 0.25em;
        border: 1px solid #333333;
        border-radius: 50%;
        margin: 11px 0.2em 0 0;
    }

    & > h1 {
        width: 2.5em;

        font-weight: 600;
        font-size: 1rem;
        line-height: 145%;

        letter-spacing: -0.05em;
        margin-right: 0.4em;
        display: ${({ stepIndex }) => stepIndex !== 0 && 'none'};
    }

    & > p {
        font-weight: 300;
        font-size: 1rem;
        line-height: 145%;
        letter-spacing: -0.05em;
        width: ${({ stepIndex }) => (stepIndex === 0 ? '218px' : '270px')};
        margin-left: ${({ stepIndex }) => stepIndex !== 0 && '0.4em'};
    }
`;

const CurriculumInfoBox = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px;

    width: 23rem;
    height: 664px;
    background: rgba(77, 47, 246, 0.05);
    border-radius: 4px;
    padding-top: 40px;
    margin-right: 1.5em;
    color: #4f4f4f;

    &:last-child {
        margin-right: 0px;
    }

    & > h1 {
        width: 98px;
        height: 46px;

        font-weight: 600;
        font-size: 1.4rem;
        line-height: 165%;
        text-align: center;
        letter-spacing: -0.05em;

        margin-bottom: 18px;
    }

    &:hover {
        transform: translateY(-20px);
    }
`;

const StepInfoWrapper = styled.section`
    height: 107px;

    & > p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 165%;
        text-align: center;
        letter-spacing: -0.05em;
    }
`;

interface StepWeekProps {
    stepIndex: number;
}

const CurriculumTrackInfoDesktop = ({ shortTitleDescriptiion, contentDetail }: CurriculumTrackInfoProps) => {
    return (
        <CurriculumTrackInfo>
            <h1>커리큘럼</h1>
            <CurriculumInfoContainer>
                {CURRICULUM_INFO.STEP.map((text: string, stepIndex: number) => (
                    <CurriculumInfoBox key={text}>
                        <Step>STEP 0{stepIndex + 1}</Step>
                        <h1>{text}</h1>
                        <StepInfoWrapper>
                            {shortTitleDescriptiion[stepIndex]
                                .replaceAll('\\n', '\n')
                                .split('\n')
                                .map((stepInfo) => (
                                    <p key={stepInfo}>{stepInfo}</p>
                                ))}
                        </StepInfoWrapper>
                        <CurriculumInfoDetail>
                            {contentDetail[stepIndex]
                                .replaceAll('\\n', '\n')
                                .split('\n')
                                .map((contentDetail, indexWeek) => (
                                    <StepWeekWrapper key={contentDetail} stepIndex={stepIndex}>
                                        <div />
                                        <h1>{indexWeek + 1}주차</h1>
                                        <p dangerouslySetInnerHTML={{ __html: contentDetail }}></p>
                                    </StepWeekWrapper>
                                ))}
                        </CurriculumInfoDetail>
                    </CurriculumInfoBox>
                ))}
            </CurriculumInfoContainer>
            <p>※ 커리큘럼은 상황에 따라 변동 가능합니다. ※</p>
        </CurriculumTrackInfo>
    );
};

export default CurriculumTrackInfoDesktop;
