import conferenceDesktopImage from 'assets/images/main/conference_desktop.svg';
import conferenceMobileImage from 'assets/images/main/conference_mobile.png';
import studyDesktopImage from 'assets/images/main/study_desktop.svg';
import studyMobileImage from 'assets/images/main/study_mobile.png';
import seminarDesktopImage from 'assets/images/main/seminar_desktop.svg';
import seminarMobileImage from 'assets/images/main/seminar_mobile.png';
import mentoringDesktopImage from 'assets/images/main/mentoring_desktop.svg';
import mentoringMobileImage from 'assets/images/main/mentoring_mobile.png';

export interface Activity {
    TITLE: string;
    DESKTOP_SRC: string;
    MOBILE_SRC: string;
    DESCRIPTION: string;
}

export const ACTIVITY_LIST: Activity[] = [
    {
        TITLE: '컨퍼런스',
        DESKTOP_SRC: conferenceDesktopImage,
        MOBILE_SRC: conferenceMobileImage,
        DESCRIPTION: '하계･동계에\n 진행되는 정기 컨퍼런스',
    },
    {
        TITLE: '스터디',
        DESKTOP_SRC: studyDesktopImage,
        MOBILE_SRC: studyMobileImage,
        DESCRIPTION: '학기와 방학 중 열리는\n 관심 분야를 탐구하는 자율 모임',
    },
    {
        TITLE: '멘토링',
        DESKTOP_SRC: mentoringDesktopImage,
        MOBILE_SRC: mentoringMobileImage,
        DESCRIPTION: '수료자와 함께 하는\n 멘토･멘티 활동',
    },
    {
        TITLE: '세미나',
        DESKTOP_SRC: seminarDesktopImage,
        MOBILE_SRC: seminarMobileImage,
        DESCRIPTION: '커리큘럼별 진행되는 정기\n 세미나와 매달 진행되는 합동 세미나',
    },
];
