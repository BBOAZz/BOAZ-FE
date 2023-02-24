import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import styled from 'styled-components';
import { media } from 'styles/mediaQuery';
import menuImg from 'assets/images/header/hamburger-menu.svg';
import closeImg from 'assets/images/header/close-button.svg';
import { isMobile } from 'react-device-detect';
import logo from 'assets/images/header/logo.svg';
import Portal from 'components/common/Portal';
import Menu from 'components/common/Menu';

const HeaderContainer = styled.header`
    height: 75px;
`;

const PcMenuContainer = styled.div`
    display: flex;
    max-width: 1440px;
    height: 75px;
    padding: 0 2em;
    margin: 0 auto;
    ${media.mobile} {
        display: none;
    }
`;

const LogoButton = styled.div`
    display: flex;
    width: 4.6rem;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 5rem;
    cursor: pointer;
    ${media.tablet} {
        margin-left: 1rem;
    }
    ${media.mobile} {
        margin-left: 1rem;
    }
`;

const MobileLogoButton = styled.div<{ isShow: boolean }>`
    display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
    width: 4.6rem;
    position: absolute;
    bottom: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 5rem;
    cursor: pointer;
    img {
        margin-bottom: 2px;
    }
    ${media.tablet} {
        left: 3rem;
        bottom: 1.3rem;
    }
    ${media.mobile} {
        left: 2rem;
    }
`;

const MenuBar = styled.div`
    height: 75px;
    padding: 0 2em;
    display: flex;
    color: transparent;
    text-shadow: 0 0 0 black;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    img {
        height: 30px;
    }
    :hover {
        cursor: pointer;
    }
`;

const PcMenu = styled.div<{ isActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    font-weight: 500;
    font-size: 18px;
    margin-right: 50px;
    color: ${({ isActive }) => (isActive ? 'black' : '#828282')};
    border-bottom: ${({ isActive }) => (isActive ? '4px solid #4D2FF6' : 'none')};
    cursor: pointer;
    ${media.mobile} {
        display: none;
    }
`;

const MobileMenuContainer = styled.div`
    width: 100vw;
    height: 75px;
    flex-direction: row;
    transition: all 300ms;
    position: fixed;
    background: white;
    z-index: 50;
    box-sizing: border-box;
    font-size: 22px;
    border-bottom: 1px solid #e1e1e1;
    ${media.desktop} {
        display: none;
    }
    ${media.tablet} {
        display: none;
    }
`;

const Header = () => {
    const location = useLocation();
    const navigateTo = useNavigate();
    const [activeMenu, setActiveMenu] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        isMobile ? (document.body.style.overflow = 'unset') : (document.body.style.overflow = 'auto');
    }, []);

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActiveMenu('home');
                break;
            case '/curriculum':
                setActiveMenu('curriculum');
                break;
            case '/recruitment':
                setActiveMenu('recruitment');
                break;
            case '/faq':
                setActiveMenu('faq');
                break;
        }
    }, [location.pathname]);

    const handleMenuClick = (menu: string) => {
        switch (menu) {
            case 'home':
                navigateTo('/');
                break;
            case 'curriculum':
                navigateTo('/curriculum');
                break;
            case 'recruitment':
                navigateTo('/recruitment');
                break;
            case 'faq':
                navigateTo('/faq');
                break;
        }
        handleMenuOpen();
    };

    const handleMenuOpen = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleHeaderLogoButton = () => {
        navigateTo('/');
    };

    return (
        <HeaderContainer>
            <MobileMenuContainer>
                <MobileLogoButton isShow={!isMenuOpen} className={'button--logo'} onClick={handleHeaderLogoButton}>
                    <img src={logo} alt="로고 이미지" />
                </MobileLogoButton>
                <MenuBar>
                    <img src={isMenuOpen ? closeImg : menuImg} onClick={handleMenuOpen} alt="메뉴 열기" />
                </MenuBar>
                <Portal>{isMenuOpen && <Menu onMenuClick={handleMenuClick} />}</Portal>
            </MobileMenuContainer>
            <PcMenuContainer>
                <LogoButton onClick={handleHeaderLogoButton}>
                    <img src={logo} />
                </LogoButton>
                <PcMenu isActive={activeMenu === 'home'} onClick={() => handleMenuClick('home')}>
                    홈
                </PcMenu>
                <PcMenu isActive={activeMenu === 'curriculum'} onClick={() => handleMenuClick('curriculum')}>
                    커리큘럼
                </PcMenu>
                <PcMenu isActive={activeMenu === 'recruitment'} onClick={() => handleMenuClick('recruitment')}>
                    리쿠르팅
                </PcMenu>
                <PcMenu isActive={activeMenu === 'faq'} onClick={() => handleMenuClick('faq')}>
                    자주 묻는 질문
                </PcMenu>
            </PcMenuContainer>
        </HeaderContainer>
    );
};

export default Header;
