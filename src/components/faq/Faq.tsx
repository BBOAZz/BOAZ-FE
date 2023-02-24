import 'react-notion/src/styles.css';
import { NotionRenderer } from 'react-notion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecruitmentWrapper from 'components/common/Notion';

const Faq = () => {
    const [response, setResponse] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        if (process.env.REACT_APP_FAQ_NOTION_URL) {
            axios.get(process.env.REACT_APP_FAQ_NOTION_URL).then(({ data }) => {
                setResponse(data);
            });
        }
    }, []);

    if (Object.keys(response).length) {
        return (
            <RecruitmentWrapper>
                <NotionRenderer blockMap={response} fullPage={true} hideHeader={true} />;
            </RecruitmentWrapper>
        );
    } else {
        return <div></div>;
    }
};
export default Faq;
