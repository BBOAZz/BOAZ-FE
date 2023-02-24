import styled from 'styled-components';
import CurriculumBannerSection from 'components/curriculum/BannerSection/CurriculumBannerSection';
import CurriculumTrackDesktopTab from 'components/curriculum/TrackSection/CurriculumTrackDesktopTab';
import CurriculumTrackMobileTab from 'components/curriculum/TrackSection/CurriculumTrackMobileTab';
import { useLocation } from 'react-router-dom';
import CurriculumLinkSection from 'components/curriculum/CurriculumLinkSection';
const CurriculumPage = styled.div``;

const Curriculum = () => {
    const location = useLocation();
    const tabIndex = location?.state?.tabIndex;

    return (
        <CurriculumPage>
            <CurriculumBannerSection />
            <CurriculumTrackDesktopTab tabIndex={tabIndex} />
            <CurriculumTrackMobileTab tabIndex={tabIndex} />
            <CurriculumLinkSection />
        </CurriculumPage>
    );
};

export default Curriculum;
