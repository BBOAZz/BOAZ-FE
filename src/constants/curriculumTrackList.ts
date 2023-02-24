import analysisTab_click from 'assets/images/curriculum/tab/analysisTab_click.svg';
import analysisTab from 'assets/images/curriculum/tab/analysisTab.svg';
import enginerringTab_click from 'assets/images/curriculum/tab/enginerringTab_click.svg';
import enginerringTab from 'assets/images/curriculum/tab/enginerringTab.svg';
import visualizeTab_click from 'assets/images/curriculum/tab/visualizeTab_click.svg';
import visualizeTab from 'assets/images/curriculum/tab/visualizeTab.svg';

export interface CurriculumTrackItem {
    DEFAULT_ICON: string;
    CLICKED_ICON: string;
    TAB_NAME: string;
    TRACK_ID: number;
}

export const CURRICULUM_TRACK_LIST: CurriculumTrackItem[] = [
    {
        DEFAULT_ICON: analysisTab,
        CLICKED_ICON: analysisTab_click,
        TAB_NAME: '데이터 분석 트랙',
        TRACK_ID: 1,
    },
    {
        DEFAULT_ICON: visualizeTab,
        CLICKED_ICON: visualizeTab_click,
        TAB_NAME: '데이터 시각화 트랙',
        TRACK_ID: 2,
    },
    {
        DEFAULT_ICON: enginerringTab,
        CLICKED_ICON: enginerringTab_click,
        TAB_NAME: '데이터 엔지니어링 트랙',
        TRACK_ID: 3,
    },
];
