import styled from 'styled-components';
import { media } from 'styles/mediaQuery';

const MenuContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    z-index: 2;
    ${media.desktop} {
        display: none;
    }
    ${media.tablet} {
        display: none;
    }
`;

const Content = styled.div`
    height: 100%;
    width: 100vw;
    position: relative;
    overflow: scroll;
    margin-top: 150px;
    ul {
        background-color: #4d2ff6;
        padding: 2em;
        margin: 0 auto;
        transition: height ease-out 1s 0s;
    }
    li {
        line-height: 26px;
        height: 55px;
        color: #ffffff;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

const Background = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    background: black;
    opacity: 0.4;
`;

interface MenuProps {
    onMenuClick(menu: string): void;
}

const Menu = ({ onMenuClick }: MenuProps) => {
    return (
        <MenuContainer>
            <Background />
            <Content>
                <ul>
                    <li onClick={() => onMenuClick('home')}>홈</li>
                    <li onClick={() => onMenuClick('curriculum')}>커리큘럼</li>
                    <li onClick={() => onMenuClick('recruitment')}>리쿠르팅</li>
                    <li onClick={() => onMenuClick('faq')}>자주 묻는 질문</li>
                </ul>
            </Content>
        </MenuContainer>
    );
};

export default Menu;
