import styled from 'styled-components';
import { media } from 'styles/mediaQuery';

const Title = styled.section<CurriculumTrackTitleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 100vw;
    margin: 0 auto;

    background: white;

    line-height: 150%;

    text-align: center;
    letter-spacing: -0.02em;
    color: #333333;

    & > h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.7rem;
        font-weight: 600;
        font-size: 1.4rem;
    }

    ${media.mobile} {
        display: flex;
        align-items: center;
        justify-content: center;

        margin: 1.5em 0;
        & > h1 {
            height: 3em;
            display: flex;
            line-height: 150%;
            letter-spacing: -0.02em;
            width: ${({ title }) =>
                title === '데이터 숲을 만들기 위한 파이프라인을 만들어봐요' ? '17.25rem' : ' 11.5rem'};
            font-weight: 600;
            font-size: 1.3rem;
            word-break: keep-all;
        }
    }
`;

interface CurriculumTrackTitleProps {
    title: string;
}

const CurriculumTrackTitle = ({ title }: CurriculumTrackTitleProps) => {
    return (
        <Title title={title}>
            <h1>{title}</h1>
        </Title>
    );
};

export default CurriculumTrackTitle;
