import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import auth from '../../utils/auth';

import './post.css';

const PostForm = () => {
  const [postText, setPostText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: auth.getProfile().data.username,
        },
      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3 className="gradient__text pl-4">Create a Post</h3>
      <p
        className={`m-3 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center border"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="postText"
            placeholder="What's on your mind?"
            value={postText}
            className="form-input text-left"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12 col-lg-3">
          <button className="paw__style-btn" type="submit">
            Add Post
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            {error.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default PostForm;
