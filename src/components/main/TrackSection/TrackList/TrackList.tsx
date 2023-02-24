import styled from 'styled-components';
import { TRACK_LIST } from 'constants/trackList';
import ArrowImg from 'assets/images/main/arrow.svg';
import { media } from 'styles/mediaQuery';
import { useNavigate } from 'react-router-dom';

const TrackButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2.3em;
    width: 100%;
    height: 185px;
    border-radius: 4px;
    border: none;
    color: white;
    letter-spacing: -0.05em;
    :hover {
        cursor: pointer;
        background: #422bc2;
        div button {
            background: rgba(0, 0, 0, 0.4);
        }
    }
    &.analysis {
        background: linear-gradient(107.4deg, #8c31f4 -0.12%, #4d36f6 100.24%);
        :hover {
            background: #422bc2;
        }
    }
    &.visualization {
        background: linear-gradient(107.4deg, #32b8f5 -0.12%, #4c3bf6 100.24%);
        :hover {
            background: #422bc2;
        }
    }
    &.engineering {
        background: linear-gradient(107.4deg, #1efad2 -0.12%, #4c3bf6 100.24%);
        :hover {
            background: #422bc2;
        }
    }
    ${media.mobile} {
        margin-bottom: 1em;
    }
`;

const TrackHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    & > p {
        font-weight: 600;
        font-size: 1.3rem;
    }
`;

const ArrowButton = styled.button`
    width: 45px;
    height: 45px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    border: none;
    ${media.tablet} {
        width: 35px;
        height: 35px;
        img {
            width: 8px;
        }
    }
    :hover {
        background: rgba(0, 0, 0, 0.4);
    }
`;

const TrackContent = styled.div`
    text-align: left;
    & > span {
        font-weight: 400;
        line-height: 156%;
        font-size: 0.9rem;
    }
`;

const TrackList = () => {
    const navigateTo = useNavigate();

    const handleTrackButton = (index: number) => {
        navigateTo('/curriculum', {
            state: {
                tabIndex: index,
            },
        });
    };

    return (
        <>
            {TRACK_LIST.map((track, index) => (
                <TrackButton key={index} className={track.ID} onClick={() => handleTrackButton(index)}>
                    <TrackHeader>
                        <p>{track.TITLE}</p>
                        <ArrowButton>
                            <img src={ArrowImg} alt={track.TITLE} />
                        </ArrowButton>
                    </TrackHeader>
                    <TrackContent>
                        {track.DESCRIPTION.split('\n').map((text, index) => (
                            <span key={index}>
                                {text}
                                <br />
                            </span>
                        ))}
                    </TrackContent>
                </TrackButton>
            ))}
        </>
    );
};

export default TrackList;
