import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { QUERY_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Palz = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const friends = data?.me.friends || [];

  return (
    <div>
      {' '}
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Palz;
