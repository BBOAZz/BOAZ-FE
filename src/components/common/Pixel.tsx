import styled from 'styled-components';
import { media } from 'styles/mediaQuery';

export interface PixelProps {
    width?: string;
    height?: string;
    color: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
}

const PixelWrapper = styled.div<PixelProps>`
    width: ${({ width }) => width ?? '88px'};
    height: ${({ height }) => height ?? '88px'};
    position: absolute;
    background-color: ${({ color }) => color};
    top: ${({ top }) => top ?? '0'};
    left: ${({ left }) => left ?? '0'};
    right: ${({ right }) => right ?? '0'};
    bottom: ${({ bottom }) => bottom ?? '0'};
    z-index: 2;
    ${media.tablet} {
        display: none;
    }
    ${media.mobile} {
        display: none;
    }
`;

const Pixel = ({ width, color, top, left, bottom, right }: PixelProps) => {
    return <PixelWrapper width={width} color={color} top={top} left={left} bottom={bottom} right={right} />;
};

export default Pixel;
