import { useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CurriculumTrackInfoProps } from 'types/curriculumInfo';
import { sliderSetting } from 'utils/SilderUtil';
import { CURRICULUM_INFO } from 'constants/curriculumInfo';

const CurriculumTrackInfo = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > h1 {
        height: 2.7rem;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 150%;

        text-align: center;
        letter-spacing: -0.02em;

        color: #333333;
        margin: 60px 0 40px 0;
    }

    & > p {
        width: 100%;
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 165%;

        text-align: center;
        letter-spacing: -0.05em;

        color: #4f4f4f;
        margin: 2rem 0;
    }

    @media (min-width: 1023px) {
        display: none;
    }
`;

const CurriculumInfoContainer = styled(Slider)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CurriculumInfoDetail = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 21.1rem;
    margin-top: 1.5rem;
    padding-top: 1.5em;

    background: rgba(77, 47, 246, 0.05);
    border-radius: 0px 0px 4px 4px;

    word-break: keep-all;
`;

const StepButtonContainer = styled.section`
    width: 100%;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    & > div:last-child {
        & > hr {
            display: none;
        }
    }
`;

const StepButtonWrapper = styled.div`
    display: flex;
    align-items: center;

    & > hr {
        width: 1.2rem;
        height: 0.1rem;
        background-color: rgba(77, 47, 246, 0.4);
        margin: 0;
        border: none;
    }
`;

const StepButton = styled.button<StepButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;

    border-radius: 50%;
    border: 0.1rem solid rgba(77, 47, 246, 0.4);

    font-weight: 600;
    font-size: 1em;
    line-height: 150%;

    letter-spacing: -0.02em;

    color: ${({ isClicked }) => (isClicked ? '#ffffff' : 'rgba(77, 47, 246, 0.4)')};
    background: ${({ isClicked }) => (isClicked ? ' #4d2ff6' : 'none')};
    cursor: pointer;
`;

const Step = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0.9rem;
    margin: 0 auto 0.4rem auto;

    width: 5.3rem;
    height: 2.05rem;
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

const CurriculumInfoBox = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px;

    width: 100vw;
    height: 33.2rem;
    background: rgba(77, 47, 246, 0.05);
    border-radius: 0.2rem;
    padding-top: 2rem;
    color: #4f4f4f;

    & > h1 {
        width: 100%;
        height: 2.3rem;

        font-weight: 600;
        font-size: 1.4rem;
        line-height: 165%;
        text-align: center;
        letter-spacing: -0.05em;

        margin-bottom: 0.9rem;
    }
`;

const StepInfoWrapper = styled.section`
    height: 4.95rem;
    margin: 0 auto;
    & > p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 165%;
        text-align: center;
        letter-spacing: -0.05em;
    }
`;

const StepWeekWrapper = styled.article<StepWeekProps>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 0.6rem;
    width: 290px;
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
        display: ${({ stepIndex }) => stepIndex != 0 && 'none'};
    }

    & > p {
        width: ${({ stepIndex }) => (stepIndex === 0 ? '218px' : '270px')};
        font-weight: 300;
        font-size: 1rem;
        line-height: 145%;
        letter-spacing: -0.05em;
        margin-left: ${({ stepIndex }) => stepIndex !== 0 && '0.4em'};
    }
`;

interface StepButtonProps {
    isClicked: boolean;
}

interface StepWeekProps {
    stepIndex: number;
}

const CurriculumTrackInfoMobile = ({ shortTitleDescriptiion, contentDetail }: CurriculumTrackInfoProps) => {
    const [currentStep, setCurrentTab] = useState('1');
    const sliderRef = useRef<Slider>(null);
    const chooseStepButton = (e: { currentTarget: { innerText: string } }) => {
        setCurrentTab(e.currentTarget.innerText);
        sliderRef.current?.slickGoTo(parseInt(e.currentTarget.innerText) - 1);
    };

    return (
        <CurriculumTrackInfo>
            <h1>커리큘럼</h1>
            <StepButtonContainer>
                {CURRICULUM_INFO.STEP_NUMBER.map((stepNumber: number) => (
                    <StepButtonWrapper key={stepNumber}>
                        <StepButton
                            onClick={chooseStepButton}
                            isClicked={currentStep === stepNumber.toString() ? true : false}
                            type="button"
                        >
                            {stepNumber}
                        </StepButton>
                        <hr />
                    </StepButtonWrapper>
                ))}
            </StepButtonContainer>
            <CurriculumInfoContainer
                {...sliderSetting}
                afterChange={(index: number) => setCurrentTab((index + 1).toString())}
                ref={sliderRef}
            >
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

export default CurriculumTrackInfoMobile;
