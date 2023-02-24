import styled from 'styled-components';
import { media } from 'styles/mediaQuery';
import { linkProps, LINK_LIST } from 'constants/curriculumLinkList';

const LinkBackground = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(77, 47, 246, 0.15);
    padding: 6em 2em;
    ${media.mobile} {
        padding: 4em 0.5em;
    }
`;

const LinkContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2em;

    max-width: 1440px;
    width: 100%;
    ${media.mobile} {
        display: flex;
        flex-direction: column;
        max-width: 1440px;
        gap: 0;
    }
`;

const DesktopTilte = styled.h1`
    color: #333333;
    & > p {
        font-weight: 700;
        font-size: 2rem;
        line-height: 150%;
        & > span {
            color: #4d2ff6;
        }
    }
    ${media.mobile} {
        display: none;
    }
`;

const MobileTilte = styled.h1`
    display: none;
    ${media.mobile} {
        display: block;
        color: #333333;
        & > p {
            font-weight: 600;
            font-size: 1.8rem;
            margin: 0;
            margin-bottom: 1em;
            line-height: 150%;
            & > span {
                color: #4d2ff6;
            }
        }
    }
`;

const LinkButton = styled.button<linkProps>`
    width: 100%;
    height: 130px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0 0 20px 20px;
    background-image: url(${(link) => link.BACKGROUND_IMAGE});
    background-size: cover;
    border-radius: 0.2em;
    border: none;
    cursor: pointer;
    & > img {
        width: 42px;
        height: 42px;
        margin-right: 8px;
    }
    ${media.mobile} {
        margin: 0;
        margin-bottom: 20px;
        background-position: left center;
    }
`;

const LinkInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    line-height: 150%;
    letter-spacing: -0.02em;

    & > h1 {
        font-weight: 400;
        font-size: 14px;
    }
    & > p {
        font-weight: 600;
        font-size: 18px;
    }
`;
const handleLinkButtonclick = (url: string) => {
    return () => {
        window.open(url);
    };
};
const CurriculumLinkSection = () => {
    return (
        <LinkBackground>
            <LinkContainer>
                <DesktopTilte>
                    <p>
                        보아즈를 <br /> <span>더</span> 알아보고 싶나요?
                    </p>
                </DesktopTilte>
                <MobileTilte>
                    <p>
                        보아즈를 <span>더</span> <br /> 알아보고 싶나요?
                    </p>
                </MobileTilte>

                {LINK_LIST.map((link: linkProps, index: number) => {
                    return (
                        <LinkButton
                            onClick={handleLinkButtonclick(link.URL)}
                            BACKGROUND_IMAGE={link.BACKGROUND_IMAGE}
                            ICON={link.ICON}
                            NAME={link.NAME}
                            CONTENT={link.CONTENT}
                            URL={link.URL}
                            key={index}
                        >
                            <img alt="더 알아보기 아이콘" src={link.ICON} />
                            <LinkInfo>
                                <h1>{link.NAME}</h1>
                                <p>{link.CONTENT}</p>
                            </LinkInfo>
                        </LinkButton>
                    );
                })}
            </LinkContainer>
        </LinkBackground>
    );
};

export default CurriculumLinkSection;
