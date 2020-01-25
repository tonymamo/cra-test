import React from 'react';
import { useParams } from "react-router-dom";

import Heading from '../components/Heading';

function UserProfile(props) {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { userName } = useParams();

  // since we pass the userName in the URL, we now use the data passed into the route
  // and filter out which user it is by comparing the userName from useParams
  const user = props.data.filter((user) => user.userName === userName)[0];

  return (
    <div>
      {console.log(user)}
      <Heading>{user.userName}</Heading>
    </div>
  );
}

export default UserProfile;
