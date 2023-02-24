export interface Process {
    STEP: string;
    TITLE: string;
    DESCIPTION: string;
}

export const PROCESS_LIST: Process[] = [
    {
        STEP: 'STEP 1',
        TITLE: '서류 지원 접수',
        DESCIPTION: '트랙에 맞게 지원하기를 클릭하여 BOAZ 지원 서류를 작성해주세요.',
    },
    {
        STEP: 'STEP 2',
        TITLE: '서류 결과 안내',
        DESCIPTION: '서류 결과는 작성해주신 문자와 메일로 안내드립니다.',
    },
    {
        STEP: 'STEP 3',
        TITLE: '면접 심사',
        DESCIPTION: '지원 서류를 바탕으로 다대다 면접이 진행됩니다.',
    },
    {
        STEP: 'STEP 4',
        TITLE: '최종 발표',
        DESCIPTION: '합격자 발표 이후 OT가 진행됩니다.',
    },
];
