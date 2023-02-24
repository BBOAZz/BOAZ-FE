import { useEffect, useRef, useState } from 'react';
import { media } from 'styles/mediaQuery';
import styled from 'styled-components';
import CurriculumTrack from 'components/curriculum/TrackSection/CurriculumTrack';
import { CurriculumTrackItem, CURRICULUM_TRACK_LIST } from 'constants/curriculumTrackList';

const CurriculumTabContainer = styled.div`
    display: inline;
    ${media.mobile} {
        display: none;
    }
`;

const TabButtonContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: white;
    padding: 40px 0px;
`;

const TabButton = styled.div<TabButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 0;
    margin-right: 0.5em;

    width: 16em;
    border-radius: 4px;

    font-weight: 600;
    font-size: 1.2rem;
    line-height: 16px;
    letter-spacing: -0.05em;

    color: #ffffff;
    background-color: ${({ isClicked }) => (isClicked ? '#3a00de' : 'rgba(77, 47, 246, 0.5)')};
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    p {
        margin-left: 0.4rem;
    }
`;

interface TabButtonProps {
    isClicked: boolean;
}
interface CurriculumTabProps {
    tabIndex: number;
}

const CurriculumTrackDesktopTab = ({ tabIndex }: CurriculumTabProps) => {
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
                        >
                            <img src={currentTabId === tab.TRACK_ID ? tab.CLICKED_ICON : tab.DEFAULT_ICON} />
                            <p>{tab.TAB_NAME}</p>
                        </TabButton>
                    );
                })}
            </TabButtonContainer>
            <CurriculumTrack currentTrackId={currentTabId} />
        </CurriculumTabContainer>
    );
};

export default CurriculumTrackDesktopTab;
