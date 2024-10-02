import { useState, useEffect } from "react";
import { Profile } from "../components/types";
import { fetchProfile } from "./profiles";

export const useProfile = (id: string) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetchProfile(id).then((profile) => {
      setProfile(profile)
    })
  }, [id])

  return {profile, setProfile}
} 