import React from 'react';
import './ChatImages.scss';
import communication from '../../images/communication.png';
import chat from '../../images/chating_girl_BG.png';

export const ChatImages: React.FC = () => {
  return (
    <div className="chat">
      <img src={chat} alt="Chating girl" className="chat__block" />
      <img src={communication} alt="Chat with massages" className="chat__image" />
    </div>
  );
};
