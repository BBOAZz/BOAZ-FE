import { useEffect, useRef, useState } from 'react';
import { media } from 'styles/mediaQuery';
import styled from 'styled-components';
import CurriculumTrack from 'components/curriculum/TrackSection/CurriculumTrack';
import { CurriculumTrackItem, CURRICULUM_TRACK_LIST } from 'constants/curriculumTrackList';

const CurriculumTabContainer = styled.div`
    display: none;
    ${media.mobile} {
        display: inline;
    }
`;

const TabButtonContainer = styled.section`
    ${media.mobile} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        background: rgba(131, 110, 249);
        height: 3rem;
        position: sticky;
        z-index: 1;
        top: 75px;
    }
`;

const TabButton = styled.div<TabButtonProps>`
    ${media.mobile} {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        flex-grow: 1;
        padding: 0 1.2em;
        width: 4.3rem;
        height: calc(3rem - 1px);
        font-weight: 600;
        font-size: 0.7rem;
        line-height: 145%;
        letter-spacing: -0.05em;
        color: ${({ isClicked }) => (isClicked ? '#4d2ff6' : '#e1e1e1')};
        background-color: ${({ isClicked }) => (isClicked ? '#ffffff' : null)};
        border-bottom: ${({ isClicked }) => isClicked && '1px solid #DCD6FF'};
        cursor: pointer;
        & > p {
            width: ${({ tabName }) =>
                tabName === '데이터 엔지니어링 트랙' ? '86px' : tabName === '데이터 시각화 트랙' ? '60px' : '50px'};
            word-break: keep-all;
            text-align: center;
        }
    }
`;

interface TabButtonProps {
    isClicked: boolean;
    tabName: string;
}
interface CurriculumTabProps {
    tabIndex?: number;
}

const CurriculumTrackMobileTab = ({ tabIndex }: CurriculumTabProps) => {
    const tabRef = useRef<HTMLDivElement>(null);
    const [currentTabId, setCurrentTabId] = useState(CURRICULUM_TRACK_LIST[0].TRACK_ID);

    useEffect(() => {
        if (tabIndex !== null && tabIndex !== undefined) {
            scrollToTab();
            setCurrentTabId(CURRICULUM_TRACK_LIST[tabIndex].TRACK_ID);
        }
    }, [tabIndex]);

    const chooseTabButton = (trackId: number) => {
        setCurrentTabId(trackId);
    };

    const scrollToTab = () => {
        window.scrollTo(0, 0);
        if (tabRef.current) {
            tabRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <CurriculumTabContainer ref={tabRef}>
            <TabButtonContainer>
                {CURRICULUM_TRACK_LIST.map((tab: CurriculumTrackItem) => {
                    return (
                        <TabButton
                            key={tab.TRACK_ID}
                            onClick={() => chooseTabButton(tab.TRACK_ID)}
                            isClicked={currentTabId === tab.TRACK_ID ? true : false}
                            tabName={tab.TAB_NAME}
                        >
                            <p>{tab.TAB_NAME}</p>
                        </TabButton>
                    );
                })}
            </TabButtonContainer>
            <CurriculumTrack currentTrackId={currentTabId} />
        </CurriculumTabContainer>
    );
};

export default CurriculumTrackMobileTab;
