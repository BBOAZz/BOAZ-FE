interface Track {
    ID: string;
    TITLE: string;
    DESCRIPTION: string;
}

export const TRACK_LIST: Track[] = [
    {
        ID: 'analysis',
        TITLE: '데이터 분석',
        DESCRIPTION: '데이터 수집 및 분석\n머신러닝 / 딥러닝 모델링 학습',
    },
    {
        ID: 'visualization',
        TITLE: '데이터 시각화',
        DESCRIPTION: '효율적인 정보 전달을 위한\n 데이터 시각화',
    },
    {
        ID: 'engineering',
        TITLE: '데이터 엔지니어링',
        DESCRIPTION: '데이터 적재부터 전처리, 모델링 결과의\n 활용까지 데이터 처리 프로세스 학습',
    },
];
