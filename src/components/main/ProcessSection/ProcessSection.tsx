import ProcessList from 'components/main/ProcessSection/ProcessList/ProcessList';
import ProcessPixelWrapper from 'components/main/ProcessSection/ProcessPixelWrapper';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/mediaQuery';

const ProcessSectionWrapper = styled.section`
    background: #3621ad;
`;

const ProcessSectionContainer = styled.div`
    max-width: 1440px;
    padding: 5em 2em;
    margin: 0 auto;
    ${media.tablet} {
        padding: 5em 1em;
    }
    ${media.mobile} {
        padding: 5em 1em;
    }
`;

const ProcessSectionTitle = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 150%;
    margin-bottom: 1.2em;
    display: flex;
    flex-direction: column;
    ${media.mobile} {
        align-items: center;
        font-size: 1.8rem;
        margin-bottom: 2em;
    }
`;

const ApplyInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.02em;
    margin-top: 0.5em;
    color: #ffffff;
    & > span {
        margin: 0 10px;
    }
    ${media.mobile} {
        display: flex;
        flex-direction: column;
        & > span {
            display: none;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    ${media.mobile} {
        flex-direction: column;
    }
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    font-size: 18px;
    letter-spacing: -0.03em;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
    &.button--apply {
        background-color: #1efad2;
        border: 1px solid transparent;
        color: black;
        :hover {
            background-color: black;
            border: 1px solid transparent;
            color: white;
            cursor: pointer;
        }
    }
    &.button--faq {
        background-color: #3621ad;
        border: 1px solid #1efad2;
        color: #1efad2;
        :hover {
            background-color: black;
            border: 1px solid transparent;
            color: white;
            cursor: pointer;
        }
    }
    &.button--disabled {
        background-color: #d6d6d6;
        border: 1px solid transparent;
        color: #9f9f9f;
    }
    ${media.mobile} {
        width: 100%;
        margin-top: 0.5em;
    }
`;

const ProcessSection = ({ isRecruitment }: { isRecruitment: boolean }) => {
    const navigateTo = useNavigate();

    const handleApplyButton = () => {
        navigateTo('/recruitment');
    };

    const handleFaqButton = () => {
        navigateTo('/faq');
    };

    return (
        <ProcessPixelWrapper>
            <ProcessSectionWrapper>
                <ProcessSectionContainer>
                    <ProcessSectionTitle>
                        지원 절차
                        <ApplyInfoWrapper>
                            <p>하반기 공개모집 - 6월 중 </p> <span> | </span> <p> 상반기 공개모집 - 12월 중</p>
                        </ApplyInfoWrapper>
                    </ProcessSectionTitle>
                    <ProcessList />
                    <ButtonWrapper>
                        {isRecruitment ? (
                            <Button className={'button--apply'} onClick={handleApplyButton}>
                                지금 지원하기
                            </Button>
                        ) : (
                            <Button className={'button--disabled'} disabled>
                                지금 지원하기
                            </Button>
                        )}
                        <Button className={'button--faq'} onClick={handleFaqButton}>
                            자주 묻는 질문
                        </Button>
                    </ButtonWrapper>
                </ProcessSectionContainer>
            </ProcessSectionWrapper>
        </ProcessPixelWrapper>
    );
};

export default ProcessSection;
