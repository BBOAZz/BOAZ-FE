import styled from 'styled-components';
import { media } from 'styles/mediaQuery';
import { SNS_BUTTON_LIST } from 'constants/snsButtonList';

const FooterWrapper = styled.footer`
    background: #000000;
`;

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 0 2em;
    height: 130px;
    max-width: 1440px;
    margin: 0 auto;
    bottom: 0;
    color: white;
    p {
        font-size: 0.8rem;
    }
    ${media.mobile} {
        padding: 0 1em;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        p {
            margin-bottom: 1em;
        }
    }
`;

const SNSButtonContainer = styled.div`
    display: flex;
`;

const SNSButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: rgba(256, 256, 256, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.8rem;
    cursor: pointer;
    img {
        z-index: 1;
    }
`;

const Footer = () => (
    <FooterWrapper>
        <FooterContainer>
            <p>© 2022 BOAZ. All rights reserved</p>
            <SNSButtonContainer>
                {SNS_BUTTON_LIST.map((snsButton, index) => (
                    <SNSButton key={index} onClick={() => (location.href = snsButton.HREF)}>
                        <img src={snsButton.SRC} alt={snsButton.ALT} />
                    </SNSButton>
                ))}
            </SNSButtonContainer>
        </FooterContainer>
    </FooterWrapper>
);

export default Footer;
