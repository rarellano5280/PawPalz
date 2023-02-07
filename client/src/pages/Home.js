import React from 'react';
import { useQuery } from '@apollo/client';

import auth from '../utils/auth';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import UploadImage from '../components/UploadImage/UploadImage';

import { QUERY_POSTS } from '../utils/queries';

import profilePic from '../assets/profile-pic.jpeg';
import landing from '../assets/landing.jpeg';
import { ImLocation } from 'react-icons/im';
import { AiFillHeart } from 'react-icons/ai';
import WelcomeCard from '../components/WelcomeCard';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || {};

  return (
    <main>
      {auth.loggedIn() ? (
        <>
          <WelcomeCard />
          <div className="flex-row justify-center">
            <div className="card card-rounded paw__post section__paddingcol-12 col-md-10 mb-3 p-3">
              <PostForm />
              <UploadImage />
            </div>
            {/* <div className="card card-rounded paw__upload section__padding col-12 col-md-10 mb-3 p-3"></div> */}
            <div className="col-12 col-md-8 mb-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList posts={posts} title="What are your Palz saying..." />
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card card-rounded paw__landing-card section__padding">
            <div className="paw__landing-content">
              <h1
                style={{ paddingBottom: 15, marginLeft: 50 }}
                className=" gradient__text"
              >
                Welcome to Paw Palz
              </h1>
              <div />
              <p
                style={{ paddingTop: 1, marginLeft: 50, marginRight: 25 }}
                className="paw__bio"
              >
                Our mission is to bring dog lovers together in a playful online
                space where tails never stop wagging and every good boy and girl
                is a star. We believe that every dog has a unique personality
                and story to share, and we're dedicated to providing a pawsome
                platform for sharing the joys of canine companionship. So grab
                your leash, grab your pup, and let's get ready to make some
                fur-ever friends!
              </p>
            </div>
            <div className="paw__landing-img">
              <img src={landing} alt="dogs"></img>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
