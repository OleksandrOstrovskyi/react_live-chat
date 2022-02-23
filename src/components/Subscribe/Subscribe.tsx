import React from 'react';
import './Subscribe.scss';
import { ReactComponent as Letter } from '../../images/pricing-icon-ticket-2 1.svg';
import { ReactComponent as LetterMail } from '../../images/pricing-icon-ticketchat 1.svg';

export const Subscribe: React.FC = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__left-part">
        <span className="subscribe__ofer">Best price</span>
        <div className="subscribe__title">A fair knowledge base software</div>
        <p className="subscribe__text">
          Creating your own knowledge center doesn`t have to be an expensive feat.
          LiveAgent offers multiple pricing plans that cater to all support needs.
          Get our standalone knowledge base software with the least expensive plan or take a look
          at other plans that offer additional features.
        </p>
        <button type="button" className="subscribe__button">
          Pricing
        </button>
      </div>
      <div className="subscribe__right-part">
        <div className="subscribe__card">
          <Letter />
          <div className="subscribe__card-title">
            Ticket
          </div>
          <p className="subscribe__card-text">
            For Small Businesses and Entrepreneurs
          </p>
          <div className="subscribe__card-price">
            15$ / mo
          </div>
          <button type="button" className="subscribe__card-button">
            Try it
          </button>
        </div>
        <div className="subscribe__card">
          <LetterMail />
          <div className="subscribe__card-title">
            Ticket + Chat
          </div>
          <p className="subscribe__card-text">
            For Medium-sized Businesses and Professional Agencies
          </p>
          <div className="subscribe__card-price">
            29$ / mo
          </div>
          <button type="button" className="subscribe__card-button">
            Try it
          </button>
        </div>
      </div>
    </section>
  );
};
