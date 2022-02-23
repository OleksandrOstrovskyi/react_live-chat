import React from 'react';
import { ChatImages } from '../ChatImages';
import './Header.scss';
import { ReactComponent as PlayIcon } from '../../images/Play icon.svg';
import { ReactComponent as Airbus } from '../../images/Airbus.svg';
import { ReactComponent as Forbes } from '../../images/Forbes.svg';
import { ReactComponent as Nascar } from '../../images/Nascar.svg';
import { ReactComponent as USC } from '../../images/Layer 1 2 1.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left-part">
        <h1 className="header__title">
          Capture more leads
          <br />
          with
          {' '}
          <span className="header__title--colored">live chat</span>
        </h1>
        <p className="header__lead">
          Take customer engagement to
          <br />
          the next level with LiveAgent
        </p>
        <p className="header__text">
          ✓ No setup fee ✓ Customer service 24/7
          <br />
          ✓ No credit card required ✓ Cancel any time
        </p>
        <div className="header__buttons">
          <button type="button" className="header__button">
            Get Started  |  14 days free
          </button>
          <button type="button" className="header__button--round">
            <PlayIcon />
          </button>
          <span className="header__button-text">
            See It In Action
          </span>
        </div>
        <div className="header__sponsors">
          <p className="header__sponsors-title">
            Used by
          </p>
          <div className="header__sponsors-logos">
            <Airbus />
            <Forbes />
            <Nascar />
            <USC />
          </div>
        </div>
      </div>
      <div className="header__right-part">
        <ChatImages />
      </div>
    </header>
  );
};
