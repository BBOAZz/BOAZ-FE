/* Desktop (해상도 1024px 이상)*/
const desktopQeury = () => `@media all and (min-width:1024px)`;

/* 테블릿 가로, 테블릿 세로 (해상도 800px ~ 1023px)*/
const tabletQeury = () => `@media all and (min-width:800px) and (max-width:1023px)`;

/* 모바일 가로, 모바일 세로 (해상도 801px 이하)*/
const mobileQeury = () => `@media all and (max-width:801px)`;

export const media = {
    desktop: desktopQeury,
    tablet: tabletQeury,
    mobile: mobileQeury,
};
