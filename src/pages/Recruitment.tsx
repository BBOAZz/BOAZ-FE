import styled from 'styled-components';
import RecruitMent from 'components/recruitment/Recruitment';

const RecruitPage = styled.div`
    height: auto;
    min-height: calc(100vh - 130px);
`;

const Recruit = () => (
    <RecruitPage>
        <RecruitMent />
    </RecruitPage>
);

export default Recruit;
