import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProfile } from './UserProfile';
import { Profile } from './types';
import { fetchProfile } from '../utils/profiles';
import { ThemeProvider } from './ThemeProvider';

import '../ProfileView.css';

function ProfileView() {
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(()=> {
    if (id) {
      fetchProfile(id).then((profile) => {
        setProfile(profile)
      });
    }
  }, [id])

  if (!profile) {
    return <div className="ProfileView">
      <h1>Profile not found</h1>
    </div>
  }
  return <div className="ProfileView">
    <ThemeProvider>
      <UserProfile profile={profile as unknown as Profile} />
    </ThemeProvider>
  </div>
}

export default ProfileView;