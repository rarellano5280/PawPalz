import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import UploadImage from '../components/UploadImage/UploadImage';

import { QUERY_POSTS } from '../utils/queries';

import bg from "../assets/bg.jpeg"

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
   <div className='card card-rounded paw__header section__padding' id="home">
    <div className='paw__header-content'>
      <h1 style={{ paddingBottom: 15, marginLeft: 50}} className=' gradient__text'>Welcome back! </h1>
      <h1 style={{ paddingBottom: 15, marginLeft: 50}} className='gradient__text'>Name</h1>
      <div style= {{ padding: 50, textAlign: 'left'}}>
      </div>
    </div>
    <div className="paw__header-image">
        <img src={bg} alt="avatar"/>
        <p style={{ paddingBottom: 10}}>@Username</p>        
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
