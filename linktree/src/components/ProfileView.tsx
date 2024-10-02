import React from 'react';
import { UserProfile } from './UserProfile';
import '../App.css';
import { profiles } from '../utils/profiles';
import { Profile } from './types';
import { useParams } from 'react-router-dom';
// TODO: Implement user profile with a name, bio, avatar, and links
// Update this to handle setting the user's custom theme

// TODO: Implement routing to handle different profiles
function ProfileView() {
  const { id } = useParams<{ id: string }>();
  const profile = profiles.find((profile) => profile.id === id);
  if (!profile) {
    return <div className="ProfileView">
      <h1>Profile not found</h1>
    </div>
  }
  return <div className="ProfileView">
    <UserProfile profile={profile as unknown as Profile} />
  </div>
}

export default ProfileView;