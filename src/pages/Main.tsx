import ProcessSection from 'components/main/ProcessSection/ProcessSection';
import BannerSection from 'components/main/BannerSection/BannerSection';
import ReviewSection from 'components/main/ReviewSection/ReviewSection';
import ActivitySection from 'components/main/ActvitySection/ActivitySection';
import TrackSection from 'components/main/TrackSection/TrackSection';
import { useRecruitmentQuery } from 'hooks/queries/useRecruitment';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainPageContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

const Main = () => {
    const { data: recruitmentInfos } = useRecruitmentQuery();
    const [isRecruitment, setIsRecruitment] = useState(true);
    useEffect(() => {
        setIsRecruitment(recruitmentInfos?.isRecruitmentDuration);
    }, [recruitmentInfos]);

    return (
        <MainPageContainer>
            <BannerSection isRecruitment={isRecruitment} />
            <ActivitySection />
            <TrackSection />
            <ReviewSection />
            <ProcessSection isRecruitment={isRecruitment} />
        </MainPageContainer>
    );
};

export default Main;
