import Pixel from 'components/common/Pixel';
import { ReactElement } from 'react';
import styled from 'styled-components';

const PixelWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const ReviewPixelWrapper = ({ children }: { children: ReactElement }) => {
    return (
        <PixelWrapper>
            <Pixel color="rgba(255, 255, 255, 1)" left="70px" />
            <Pixel color="rgba(255, 255, 255, 0.05)" top="88px" left="-20px" />
            <Pixel color="rgba(255, 255, 255, 0.15)" top="88px" left="calc(80% - 100px)" />
            <Pixel color="rgba(54, 33, 173, 0.5)" top="calc(100% - 176px)" left="70px" />
            <Pixel color="#3621AD" top="calc(100% - 88px)" left="calc(80% - 88px)" />
            <Pixel color="rgba(255, 255, 255, 0.15)" top="calc(100% - 88px)" left="calc(100% - 110px)" />
            {children}
        </PixelWrapper>
    );
};

export default ReviewPixelWrapper;
