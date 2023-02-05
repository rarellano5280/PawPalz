import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import UploadImage from '../components/UploadImage/UploadImage';

import { QUERY_POSTS } from '../utils/queries';

import profilePic from "../assets/profile-pic.jpeg"
import { ImLocation } from "react-icons/im"
import { AiFillHeart } from "react-icons/ai";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
   <div className='card card-rounded paw__header section__padding' id="home">
    <div className='paw__header-content'>
      <h1 style={{ paddingBottom: 15, marginLeft: 50}} className=' gradient__text'>Welcome back! </h1>
      <h1 style={{ paddingBottom: 15, marginLeft: 100}} className='gradient__text'>Name</h1>
      <div style= {{ padding: 50, textAlign: 'left'}}>
      </div>
    </div>
    <div className="paw__header-image">
        <img src={profilePic} alt="avatar"/>
        <p style={{ paddingTop: 10 }}className='paw__bio'>@Username</p>
        <h4 style={{paddingTop: 5 }} className='paw__bio'>About</h4>
        <p style={{ paddingTop: 1, marginLeft: 50, marginRight: 50 }}className='paw__bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut varius metus, vitae efficitur nibh</p>
        <p><ImLocation size={20}/>Denver, Colorado</p>
        <p><AiFillHeart/>  Single</p>
      </div>
  </div>
      <div className="flex-row justify-center">
        <div
          className="card card-rounded paw__post section__paddingcol-12 col-md-10 mb-3 p-3"
        >
          <PostForm />
          <UploadImage />
        </div>
        <div
          className="card card-rounded paw__upload section__padding col-12 col-md-10 mb-3 p-3"
        >
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Some Feed for Post(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
