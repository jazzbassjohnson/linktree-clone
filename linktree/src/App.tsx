import React from 'react';
import { UserProfile } from './components/UserProfile';
import './App.css';
import { profiles } from './utils/profiles';
import { Profile } from './components/types';
// TODO: Implement user profile with a name, bio, avatar, and links
// Update this to handle setting the user's custom theme

function App() {
  return <div className="App">
    <UserProfile profile={profiles[0] as unknown as Profile} />
  </div>
}

export default App;
