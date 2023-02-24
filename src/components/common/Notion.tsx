import styled from 'styled-components';
import { media } from 'styles/mediaQuery';
const RecruitmentWrapper = styled.div`
    html {
        font-size: 10px;
    }
    :root {
        --font-size-summary-marker: 1.5rem;
        --font-size-summary: 1rem;
        --font-size-link: 3rem;
        --font-size-a-width: 7vh;
        --font-size-a-heigh: 1.5vh;
        --font-size-summary-top: 1rem;
    }

    @media (min-width: 360px) {
        :root {
            --font-size-summary-marker: 2.5rem;
            --font-size-summary: 2rem;
            --font-size-link: 3rem;
            --font-size-a-width: 7vh;
            --font-size-a-heigh: 1.5vh;
            --font-size-summary-top: 1.5rem;
        }
    }

    @media (min-width: 480px) {
        :root {
            --font-size-summary-marker: 2.5rem;
            --font-size-summary: 2rem;
            --font-size-link: 3rem;
            --font-size-a-width: 9vh;
            --font-size-a-heigh: 2.5vh;
            --font-size-summary-top: 1.5rem;
        }
    }

    @media (min-width: 1024px) {
        :root {
            --font-size-summary-marker: 3.5rem;
            --font-size-summary: 3rem;
            --font-size-link: 3rem;
            --font-size-a-width: 17vh;
            --font-size-a-heigh: 4vh;
            --font-size-summary-top: 1.8rem;
        }
    }
    main > div:nth-of-type(2) > div > p {
        ${media.tablet} {
            display: flex;
            flex-direction: row;
            justify-content: center;
            text-align: center;
        }
        ${media.mobile} {
            display: flex;
            flex-direction: row;
            justify-content: center;
            text-align: center;
        }
    }
    main > p:last-of-type {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }

    /* 지원하기 버튼 분석 */
    p.notion-text a[href*='https://']
    {
        background-color: #4d2ff6;
        color: #ffffff;
        border: 1px solid #4d2ff6;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        margin: 1px;
        overflow: hidden;
        border-radius: 0.25rem;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.5;
        text-align: center;
        cursor: pointer;
        outline: none;
        min-width: 1rem;
        min-height: 1rem;
        width: 10rem;

        :hover {
            background-color: #3621ad;
        }
    }

    /* 자주 묻는 질문 버튼 */
    p.notion-text a[href*='/faq'] {
        background-color: #1efad2;
        color: black;
        border: 1px solid #1efad2;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        margin: 1px;
        overflow: hidden;
        border-radius: 1rem;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        text-align: center;
        cursor: pointer;
        outline: none;
        min-width: 1rem;
        min-height: 1rem;
        width: 20rem;

        :hover {
            background-color: black;
            border: 1px solid black;
            color: white;
        }
    }

    .notion-toggle:hover {
        background: var(--gray-25) !important;
    }

    .notion-toggle {
        border: 1px solid lightgray !important;
        border-radius: 12px !important;
        position: relative !important;
        text-align: left !important;
        transition: background 0.2s ease-in-out !important;
        margin-bottom: 1rem;
        padding: 1rem;
    }

    /* notion toggle 처음 부분 */
    .notion-toggle summary {
        /* font-size: 2.5rem; */
        font: var(--font-size-summary) solid black !important;
        /* width: 24vw; */
        padding-left: 1rem;
    }
    .notion-toggle p.notion-text {
        display: flex;
        flex-direction: row;
        justify-content: left;
    }

    .notion-toggle summary::before {
        position: absolute !important;
        font-weight: 100 !important;
        font-size: 50px !important;
        line-height: 1 !important;
        opacity: 0.4 !important;
        /* content: '+' !important; */
        top: var(--font-size-summary-top) !important;
        right: 20px !important;
    }

    details[open] {
        border: 1px solid lightgray !important;
        border-radius: 12px !important;
        margin-bottom: 16px !important;
        position: relative !important;
        text-align: left !important;
        transition: background 0.2s ease-in-out !important;
    }

    /* toggle 안에 내용 */
    .notion-toggle div p {
        margin-left: 0.6rem;
        word-break: keep-all;
        /* height: 8vh; */
    }

    a:-webkit-any-link {
        text-decoration: none;
    }

    .notion-toggle summary::marker {
        opacity: 0.4 !important;
        font-size: var(--font-size-summary-marker);
        color: gray;
        content: '+  ';
    }

    details[open] summary::marker {
        opacity: 0.4 !important;
        font-size: var(--font-size-summary-marker);
        color: gray;
        content: '–  ' !important;
    }
`;

export default RecruitmentWrapper;
