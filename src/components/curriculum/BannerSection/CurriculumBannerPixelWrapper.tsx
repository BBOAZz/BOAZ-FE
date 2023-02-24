import Pixel from 'components/common/Pixel';
import { ReactElement } from 'react';
import styled from 'styled-components';

const PixelWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const CurriculumBannerPixelWrapper = ({ children }: { children: ReactElement }) => {
    return (
        <PixelWrapper>
            <Pixel color=" rgba(255, 255, 255, 0.05)" top="5%" left="32%" />
            <Pixel color=" rgba(255, 255, 255, 0.2)" top="39%" left="7.8em" />
            <Pixel color=" rgba(255, 255, 255, 0.05)" top="calc(39% + 88px)" left="calc(7.8em + 88px)" />
            <Pixel color=" rgba(255, 255, 255, 0.05)" top="calc(50% + 88px)" left="calc(100% - 267px)" />

            {children}
        </PixelWrapper>
    );
};

export default CurriculumBannerPixelWrapper;
