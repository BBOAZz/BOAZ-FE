import facebookIcon from 'assets/images/footer/facebook.svg';
import instaIcon from 'assets/images/footer/instagram.svg';
import kakaoIcon from 'assets/images/footer/kakao.svg';
import mailIcon from 'assets/images/footer/mail.svg';
import youtubeIcon from 'assets/images/footer/youtube.svg';

export interface SnsButton {
    SRC: string;
    HREF: string;
    ALT: string;
}

export const SNS_BUTTON_LIST: SnsButton[] = [
    {
        SRC: facebookIcon,
        HREF: 'https://www.facebook.com/BOAZbigdata',
        ALT: '보아즈 페이스북으로 이동하기',
    },
    {
        SRC: instaIcon,
        HREF: 'http://www.instagram.com/boaz_bigdata',
        ALT: '보아즈 인스타로 이동하기',
    },
    {
        SRC: kakaoIcon,
        HREF: 'https://pf.kakao.com/_xeaCBK',
        ALT: '보아즈 카카오톡으로 이동하기',
    },
    {
        SRC: youtubeIcon,
        HREF: 'https://www.youtube.com/@bigdataboaz4452',
        ALT: '보아즈 유튜브로 이동하기',
    },
    {
        SRC: mailIcon,
        HREF: 'mailto:boaz.bigdata@gmail.com',
        ALT: '보아즈 이메일로 이동하기',
    },
];
