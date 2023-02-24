import ReactGA from 'react-ga4';
import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface WrapperProps {
    initialized: boolean;
    children: PropsWithChildren<any>;
}

export default function ReactGAWrapper(props: WrapperProps) {
    const location = useLocation();
    useEffect(() => {
        if (props.initialized) {
            ReactGA.send({
                hitType: 'pageview',
                path: location.pathname,
                location: location.pathname,
                title: location.pathname,
            });
        }
    }, [props.initialized, location]);

    return props.children;
}
