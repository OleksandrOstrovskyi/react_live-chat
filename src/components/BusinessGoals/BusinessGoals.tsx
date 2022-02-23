import React from 'react';
import './BusinessGoals.scss';
import graph from '../../images/Graf.png';

export const BusinessGoals: React.FC = () => {
  return (
    <section className="goals">
      <div className="goals__left-part">
        <span className="goals__offer">
          Helpdesk benefits
        </span>
        <div className="goals__title">
          How can live chat software help your business?
        </div>
        <p className="goals__text">
          Chat conversations can help your contact center
          improve your sales process and empower your online businesses
        </p>
        <div className="goals__image-block">
          <div className="goals__graph-block">
            <img src={graph} alt="Graph" className="goals__graph-image" />
          </div>
        </div>
      </div>
      <div className="goals__right-part">
        <div className="goals__sale-block">
          <div className="goals__sale-amount">
            17-30%
          </div>
          <div className="goals__sale-ofer">
            <div className="goals__sale-title">
              Decrease in costs
            </div>
            <p className="goals__sale-text">
              Save costs on agent per month
              <br />
              with the right pricing plan
            </p>
          </div>
        </div>
        <div className="goals__sale-block">
          <div className="goals__sale-amount">
            20%
          </div>
          <div className="goals__sale-ofer">
            <div className="goals__sale-title">
              Conversion rate increase
            </div>
            <p className="goals__sale-text">
              Empower your sales team
              <br />
              with online chat and increase sales
            </p>
          </div>
        </div>
        <div className="goals__sale-block">
          <div className="goals__sale-amount">
            73%
          </div>
          <div className="goals__sale-ofer">
            <div className="goals__sale-title">
              Higher satisfaction rates
            </div>
            <p className="goals__sale-text">
              Improve customer satisfaction
              <br />
              and decrease cart abandonment
            </p>
          </div>
        </div>
        <button type="button" className="goals__button">
          Make your business goals a reality
        </button>
      </div>
    </section>
  );
};
