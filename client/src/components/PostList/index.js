import React from 'react';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className='card card-rounded paw__post-list section__padding'>
            <h4 className="paw__post-header card-header card-rounded p-2 m-0 text-white">
              {post.postAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this post on {post.createdAt}
              </span>
            </h4>
            <div className="paw__post-content text-center card-body card-rounded p-2">
              <p>{post.postText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
