import Pixel from 'components/common/Pixel';
import { ReactElement } from 'react';
import styled from 'styled-components';

const PixelWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const ProcessPixelWrapper = ({ children }: { children: ReactElement }) => {
    return (
        <PixelWrapper>
            <Pixel color="rgba(255, 255, 255, 0.05)" top="500px" left="100px" />
            <Pixel color="rgba(255, 255, 255, 0.05)" left="80%" />
            <Pixel color="rgba(255, 255, 255, 0.15)" top="200px" left="calc(100% - 60px)" />
            {children}
        </PixelWrapper>
    );
};

export default ProcessPixelWrapper;
