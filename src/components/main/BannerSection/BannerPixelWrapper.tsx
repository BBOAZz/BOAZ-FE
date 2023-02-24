import Pixel from 'components/common/Pixel';
import { ReactElement } from 'react';
import styled from 'styled-components';

const PixelWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

const BannerPixelWrapper = ({ children }: { children: ReactElement }) => {
    return (
        <PixelWrapper>
            <Pixel color="rgba(255, 255, 255, 0.05)" top="calc(13% + 88px)" left="88px" />
            <Pixel color="rgba(255, 255, 255, 0.05)" top="13%" left="80%" />
            <Pixel color="rgba(255, 255, 255, 0.15)" top="calc(13% + 176px)" left="70vw" />
            <Pixel color="rgba(255, 255, 255, 0.05)" top="50%" left="clac(100% - 88px)" />
            <Pixel color="rgba(255, 255, 255, 0.15)" top="calc(800px - 264px)" left="30vw" />
            <Pixel color="rgba(255, 255, 255, 1)" top="calc(800px - 176px)" />
            <Pixel color="rgba(255, 255, 255, 1)" top="calc(100% - 88px)" left="88px" width="20vw" />
            <Pixel
                color="rgba(255, 255, 255, 1)"
                top="calc(100% - 88px)"
                left="calc(176px + 20vw)"
                width="calc(80% - 30vw - 176px)"
            />
            <Pixel color="rgba(255, 255, 255, 1)" top="calc(100% - 88px)" left="clac(100% - 176px)" width="176px" />
            <Pixel color="rgba(255, 255, 255, 1)" top="calc(100% - 176px)" left="clac(100% - 88px)" />
            {children}
        </PixelWrapper>
    );
};

export default BannerPixelWrapper;
