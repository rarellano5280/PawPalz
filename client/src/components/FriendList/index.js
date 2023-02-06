import React from 'react';

const FriendList = ({ friends, title }) => {
  if (!friends.length) {
    return <h3>You have no Palz!</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {friends &&
        friends.map((friend) => (
          <div
            key={friend._id}
            className="card card-rounded paw__post-list section__padding"
          >
            <h4 className="paw__post-header card-header card-rounded p-2 m-0 text-white">
              {friend.username} <br />
              <img src={friend.image} alt="avatar" />
            </h4>
          </div>
        ))}
    </div>
  );
};

export default FriendList;
