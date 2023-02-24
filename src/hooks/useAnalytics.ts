import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const GOOGLE_ANALYTICS_TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

export default function useAnalytics() {
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        if (GOOGLE_ANALYTICS_TRACKING_ID) {
            if (process.env.NODE_ENV === 'production') {
                ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);
            }
        }
        setInitialized(true);
    }, []);
    return {
        initialized,
    };
}
