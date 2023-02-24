import CurriculumTrackTitle from 'components/curriculum/TrackSection/CurriculumTrackTitle';
import CurriculumTrackTechSkill from 'components/curriculum/TrackSection/CurriculumTrackTechSkill';
import CurriculumTrackInfoDesktop from 'components/curriculum/TrackSection/CurriculumTrackInfoDesktop';
import CurriculumTrackInfoMobile from 'components/curriculum/TrackSection/CurriculumTrackInfoMobile';
import CurriculumTrackRecommendation from 'components/curriculum/TrackSection/CurriculumTrackRecommendation';
import { CURRICULUM_TRACK_LIST } from 'constants/curriculumTrackList';
import { useCurriculumInfoQuery } from 'hooks/queries/curriculum/useCurriculumInfo';

const CurriculumTrack = ({ currentTrackId }: { currentTrackId: number }) => {
    const { data: currentTrack } = useCurriculumInfoQuery(currentTrackId);

    return (
        <>
            <CurriculumTrackTitle title={currentTrack.payload.title} />
            <CurriculumTrackTechSkill trackId={currentTrack.payload.trackId} />
            <CurriculumTrackInfoMobile
                shortTitleDescriptiion={currentTrack.payload.shortContentDescription}
                contentDetail={currentTrack.payload.contentDetail}
            />
            <CurriculumTrackInfoDesktop
                shortTitleDescriptiion={currentTrack.payload.shortContentDescription}
                contentDetail={currentTrack.payload.contentDetail}
            />
            <CurriculumTrackRecommendation
                recommendationTitle={CURRICULUM_TRACK_LIST[currentTrack.payload.trackId - 1].TAB_NAME}
                trackId={currentTrack.payload.trackId}
            />
        </>
    );
};

export default CurriculumTrack;
