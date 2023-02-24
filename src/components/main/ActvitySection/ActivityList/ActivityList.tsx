import styled from 'styled-components';
import { media } from 'styles/mediaQuery';
import { ACTIVITY_LIST } from 'constants/activityList';

const ActivityContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 2em;
    ${media.mobile} {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        column-gap: 1em;
    }
`;

const ActivityImg = styled.picture`
    & > img {
        margin-top: 2em;
        max-width: 100%;
        height: auto;
        ${media.mobile} {
            width: 320px;
            max-width: 320px;
            height: 265px;
            object-fit: cover;
        }
    }
`;

const ActivityItem = styled.div`
    ${media.mobile} {
        width: 320px;
    }
    & > h3 {
        font-size: 1.4rem;
        color: #333333;
        font-weight: 600;
        margin-top: 1.4em;
        margin-bottom: 0.7em;
        ${media.mobile} {
            font-size: 1.3rem;
        }
    }
    & > div {
        font-size: 1rem;
        color: #333333;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: -0.02em;
        margin-bottom: 2em;
    }
`;

const ActivityList = () => (
    <ActivityContainer>
        {ACTIVITY_LIST.map((activity, index) => (
            <ActivityItem key={index}>
                <ActivityImg>
                    <source srcSet={activity.MOBILE_SRC} media={'(max-width: 801px)'} />
                    <img src={activity.DESKTOP_SRC} alt={activity.TITLE} />
                </ActivityImg>
                <h3>{activity.TITLE}</h3>
                <div>
                    {activity.DESCRIPTION.split('\n').map((text, index) => (
                        <span key={index}>
                            {text}
                            <br />
                        </span>
                    ))}
                </div>
            </ActivityItem>
        ))}
    </ActivityContainer>
);

export default ActivityList;
