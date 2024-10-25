import React from 'react';
import './Benefits.css'; // Custom CSS for styling and animations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faMoneyBillWave, faVolumeMute, faBolt } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons

const BenefitsSection = () => {
  const benefits = [
    {
      icon: faLeaf,
      title: 'Lower Emissions',
      description: 'Electric motorcycles produce zero emissions, helping to reduce air pollution and protect the environment.',
    },
    {
      icon: faMoneyBillWave,
      title: 'Cost Savings',
      description: 'Save money on fuel and maintenance with electric motorcycles, which have lower long-term costs.',
    },
    {
      icon: faVolumeMute,
      title: 'Quiet Operation',
      description: 'Enjoy a quiet, smooth ride with almost no engine noise, making your trips more peaceful.',
    },
    {
      icon: faBolt,
      title: 'Instant Torque',
      description: 'Experience instant power and acceleration with electric motors, giving you a thrilling and responsive ride.',
    },
  ];

  return (
    <div className="benefits-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Benefits of Electric Motorcycles</h2>
        <div className="row">
          {benefits.map((benefit, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="benefit-card text-center p-4">
                <FontAwesomeIcon icon={benefit.icon} className="benefit-icon mb-3" />
                <h5>{benefit.title}</h5>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
