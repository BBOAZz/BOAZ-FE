import styled from 'styled-components';
import Faq from 'components/faq/Faq';

const FaqPage = styled.div`
    height: auto;
    min-height: calc(100vh - 130px);
`;

const FaqPageComponent = () => (
    <FaqPage>
        <Faq />
    </FaqPage>
);

export default FaqPageComponent;
