import { useQuery } from '@apollo/client';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { QUERY_ME } from '../../utils/queries';
import profilePic from '../../assets/profile-pic.jpeg';

const WelcomeCard = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || [];

  return (
    <div className="card card-rounded paw__header section__padding" id="home">
      <div className="paw__header-content">
        <h1
          style={{ paddingBottom: 15, marginLeft: 50 }}
          className=" gradient__text"
        >
          Welcome back!{' '}
        </h1>
        <h1
          style={{ paddingBottom: 15, marginLeft: 100 }}
          className="gradient__text"
        >
          {me.username}
        </h1>
        <div style={{ padding: 50, textAlign: 'left' }}></div>
      </div>
      <div className="paw__header-image">
        <img src={profilePic} alt="avatar" />
        <p style={{ paddingTop: 10 }} className="paw__bio">
          @{me.username}
        </p>
        <h4 style={{ paddingTop: 5 }} className="paw__bio">
          About
        </h4>
        <p
          style={{ paddingTop: 1, marginLeft: 50, marginRight: 50 }}
          className="paw__bio"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut varius
          metus, vitae efficitur nibh
        </p>
        <p>
          <ImLocation size={20} />
          Denver, Colorado
        </p>
        <p>
          <AiFillHeart /> Single
        </p>
      </div>
    </div>
  );
};

export default WelcomeCard;
