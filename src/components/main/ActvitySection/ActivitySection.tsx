import ActivityList from 'components/main/ActvitySection/ActivityList/ActivityList';
import styled from 'styled-components';
import { media } from 'styles/mediaQuery';

const ActivitySectionWrapper = styled.section`
    background: white;
`;

const ActivitySectionContainer = styled.div`
    max-width: 1440px;
    padding: 6em 2em;
    margin: 0 auto;
    p {
        font-size: 1.2rem;
        margin-bottom: 1.7em;
        font-weight: 600;
        width: fit-content;
        border-bottom: 1.5px solid white;
    }
    div {
        font-size: 1.1rem;
        line-height: 150%;
        font-weight: 500;
        ${media.mobile} {
            font-size: 1rem;
        }
    }
    ${media.tablet} {
        padding: 6em 1em;
        width: calc(100vw - 2em);
    }
    ${media.mobile} {
        padding: 4em 1em;
        width: calc(100vw - 2em);
    }
`;

const ActivitySectionTitle = styled.h1`
    font-weight: 600;
    font-size: 2rem;
    color: #333333;
    letter-spacing: -0.02em;
    line-height: 150%;
    & > strong {
        color: #4d2ff6;
    }
    ${media.mobile} {
        font-size: 1.8rem;
        width: 250px;
    }
`;

const ActivitySection = () => (
    <ActivitySectionWrapper>
        <ActivitySectionContainer>
            <ActivitySectionTitle>
                BOAZ는 함께 <br /> <strong>성장하는 가치</strong>를 추구해요
            </ActivitySectionTitle>
            <ActivityList />
        </ActivitySectionContainer>
    </ActivitySectionWrapper>
);

export default ActivitySection;
