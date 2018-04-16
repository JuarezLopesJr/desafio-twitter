import React from 'react';
import { Popup } from 'react-leaflet';
import styled from 'styled-components';

const AVATAR_SIZE = 2;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

const Container = styled.div`
  flex: 1;
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  justify-content: center;
  align-items: center;
  padding-left: 1em;
`;
const Avatar = styled.img`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  justify-content: center;
  align-items: center;
  border-radius: ${AVATAR_RADIUS};
`;
const AvatarUserText = styled.p`
  font-weight: bold;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const AvatarText = styled.p`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const TweetCard = ({ tweet }) => {
  return (
    <Popup>
      <Container>
        <Avatar src={tweet.user.avatar} />
        <AvatarUserText>{`@${tweet.user.username}`}</AvatarUserText>
        <AvatarText>{tweet.text}</AvatarText>
      </Container>
    </Popup>
  );
};

export default TweetCard;
