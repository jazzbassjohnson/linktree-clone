import { Profile } from "./types";
import { UserProfile } from "./UserProfile";
import { profiles } from "../utils/profiles";
import { useParams } from "react-router-dom";

const EditView = () => {
  const { id } = useParams<{ id: string }>();
  const profile = profiles.find((profile) => profile.id === id);
  if (!profile) {
    return <div className="ProfileView">
      <h1>Profile not found</h1>
    </div>
  }
  return <div>
    <div>
      <h1>Editing Tools</h1>
    </div>
    <div>
      <div className="ProfileView">
        <UserProfile profile={profile as unknown as Profile} />
      </div>
    </div>
  </div>
  
}

export default EditView