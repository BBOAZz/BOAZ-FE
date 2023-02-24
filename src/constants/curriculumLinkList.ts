import youtubeBackgroundImage from 'assets/images/curriculum/link/background/youtube.png';
import facebookBackgroundImage from 'assets/images/curriculum/link/background/facebook.png';
import instagramBackgroundImage from 'assets/images/curriculum/link/background/instagram.png';
import blogBackgroundImage from 'assets/images/curriculum/link/background/blog.png';
import slideshareBackgroundImage from 'assets/images/curriculum/link/background/slideshare.png';
import youtubeIcon from 'assets/images/curriculum/link/icon/youtube_icon.svg';
import facebookIcon from 'assets/images/curriculum/link/icon/facebook_icon.svg';
import instagramIcon from 'assets/images/curriculum/link/icon/instagram_icon.svg';
import blogIcon from 'assets/images/curriculum/link/icon/blog_icon.svg';
import slideshareIcon from 'assets/images/curriculum/link/icon/slideshare_icon.svg';

export interface linkProps {
    BACKGROUND_IMAGE: string;
    ICON: string;
    NAME: string;
    CONTENT: string;
    URL: string;
}

export const LINK_LIST: linkProps[] = [
    {
        BACKGROUND_IMAGE: youtubeBackgroundImage,
        ICON: youtubeIcon,
        NAME: 'Youtube',
        CONTENT: '컨퍼런스 발표 영상',
        URL: 'https://www.youtube.com/@bigdataboaz4452/videos',
    },
    {
        BACKGROUND_IMAGE: facebookBackgroundImage,
        ICON: facebookIcon,
        NAME: 'Facebook',
        CONTENT: '동아리 활동 소식',
        URL: 'https://www.facebook.com/BOAZbigdata',
    },
    {
        BACKGROUND_IMAGE: instagramBackgroundImage,
        ICON: instagramIcon,
        NAME: 'Instagram',
        CONTENT: '동아리 활동 소식',
        URL: 'http://www.instagram.com/boaz_bigdata',
    },
    {
        BACKGROUND_IMAGE: blogBackgroundImage,
        ICON: blogIcon,
        NAME: 'Blog',
        CONTENT: '뉴스레터',
        URL: 'https://blog.naver.com/boazbigdata',
    },
    {
        BACKGROUND_IMAGE: slideshareBackgroundImage,
        ICON: slideshareIcon,
        NAME: 'SlideShare',
        CONTENT: '컨퍼런스 발표 자료',
        URL: 'https://www.slideshare.net/BOAZbigdata',
    },
];
