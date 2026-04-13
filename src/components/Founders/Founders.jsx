import React from 'react';
import './Founders.css';
import brad from '../Images/brad.jfif';
import jenefer from '../Images/jenefer.jfif';
import konal from '../Images/konal.jfif';

const Founders = () => {
  const members = [
    {
      name: 'Brad',
      position: 'Founder',
      image: brad,
      bio: 'Brad is the visionary founder of our charity, dedicated to making a positive impact in the community.'
    },
    {
      name: 'Jenefer',
      position: 'Office Bearer',
      image: jenefer,
      bio: 'Jenefer serves as an office bearer, bringing expertise in administration and community outreach.'
    },
    {
      name: 'Konal',
      position: 'Office Bearer',
      image: konal,
      bio: 'Konal contributes as an office bearer, focusing on project management and volunteer coordination.'
    }
  ];

  return (
    <div className="founders-container">
      <h1>Founders & Office Bearers</h1>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.image} alt={member.name} className="member-image" />
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;