import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import FriendList from '../components/FriendList';

const Palz = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const friends = data?.me.friends || [];

  return (
    <div>
      <div className="col-12 col-md-8 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <FriendList friends={friends} title="Say hi to your Palz!" />
        )}
      </div>
    </div>
  );
};

export default Palz;
