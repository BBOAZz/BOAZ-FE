import styled from 'styled-components';
import { media } from 'styles/mediaQuery';
import TrackList from 'components/main/TrackSection/TrackList/TrackList';

const TrackSectionWrapper = styled.section`
    background: #fafafa;
`;

const TrackSectionContainer = styled.div`
    max-width: 1440px;
    padding: 6em 2em 0;
    margin: 0 auto;
    ${media.tablet} {
        padding: 0 1em;
    }
    ${media.mobile} {
        padding: 0 1em;
    }
`;

const TrackSectionTitle = styled.h2`
    font-weight: 600;
    font-size: 2rem;
    color: #333333;
    letter-spacing: -0.02em;
    line-height: 150%;
    margin-bottom: 1em;
    & > strong {
        color: #4d2ff6;
    }
    ${media.desktop} {
        & > br.mobile-line-seperate {
            display: none;
        }
    }
    ${media.mobile} {
        font-size: 1.7rem;
        width: 15rem;
        margin-top: 1.5em;
    }
`;

const TrackListWrapper = styled.div`
    margin-top: 2em;
    margin-bottom: 6em;
    display: grid;
    column-gap: 1.5em;
    grid-template-columns: repeat(3, 1fr);
    ${media.mobile} {
        display: flex;
        flex-direction: column;
    }
`;

const TrackSection = () => {
    return (
        <TrackSectionWrapper>
            <TrackSectionContainer>
                <TrackSectionTitle>
                    열정 넘치는 동료들과 <br /> <strong>전문 분야</strong>로 같이{' '}
                    <br className="mobile-line-seperate" /> 성장해요
                </TrackSectionTitle>
                <TrackListWrapper>
                    <TrackList />
                </TrackListWrapper>
            </TrackSectionContainer>
        </TrackSectionWrapper>
    );
};

export default TrackSection;
