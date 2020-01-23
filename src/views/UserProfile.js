import React from 'react';
import { useParams } from "react-router-dom";

import Heading from '../components/Heading';

function UserProfile() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { userName } = useParams();

  return (
    <div>
      <Heading>{userName}</Heading>
    </div>
  );
}

export default UserProfile;
