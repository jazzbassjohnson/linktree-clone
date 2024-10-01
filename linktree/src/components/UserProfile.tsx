// TODO: Implement user profile with a name, bio, avatar, and links
import { UserBio } from "./UserBio"
import { UserAvatar } from "./UserAvatar"
import { LinkGroup } from "./LinkGroup"
import { Username } from "./Username"
import { Profile } from "./types"
import { SocialRow } from "./SocialRow"
// TODO: Implement styled components
// TODO: Implement user profile with a name, bio, avatar, and links
export const UserProfile = ({profile}: {profile: Profile}) => {
  
  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
  
      <div style={{ display: "flex", justifyContent: "center" }}>
        <UserAvatar src={profile.image} />
      </div>
  
      <Username name="John Doe"  verified={true} />
      <UserBio bio={profile.description} />
      <SocialRow socials={profile.socials} />

      {profile?.groups.map((group) => (
        <LinkGroup group={group} />
      ))}
      
      
    </div>
  )
}