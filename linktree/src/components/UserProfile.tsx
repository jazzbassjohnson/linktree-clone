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
  const backgroundImage = profile.theme.backgroundImage ? `url(${profile.theme.backgroundImage})` : profile.theme.backgroundColor
  const primaryColor = profile.theme.primaryColor
  const secondaryColor = profile.theme.secondaryColor
  
  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", background: backgroundImage, color: primaryColor, border: `2px solid ${secondaryColor}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh" }}>
  
      <div style={{ display: "flex", justifyContent: "center" }}>
        <UserAvatar src={profile.image} />
      </div>
      {/* Username */}
      <Username name={profile.name}  verified={profile.verified} />
      
      {/* Bio */}
      <UserBio bio={profile.description} />
      
      {/* Socials */}
      {profile.socials && <SocialRow socials={profile.socials} />}  
      
      {/* Link groups */}
      {profile?.groups.map((group) => (
        <LinkGroup group={group} />
      ))}
      
      {/* Footer */}
      <div style={{ marginTop: "40px" }}>*Footer*</div>
    </div>
  )
}