import { LinkGroup } from "./LinkGroup"
import { Profile } from "./types"
import { SocialRow } from "./SocialRow"
import { ThemeContext } from "./ThemeProvider"
import { useContext } from "react"
import { useEffect } from "react"
import { UserAvatar } from "./UserAvatar"
import { UserBio } from "./UserBio"
import { Username } from "./Username"

export const UserProfile = ({profile}: {profile: Profile}) => {
  // TODO: Implement the theme provider
  const { theme, setTheme } = useContext(ThemeContext)

  // set them on the theme provider
  useEffect(() => {
    setTheme(profile.theme)
  }, [profile.theme, setTheme])

  return (
    <div className="profile-container" style={{ 
      color: theme.primaryColor,
      backgroundColor: theme.backgroundColor,
      backgroundImage: theme.backgroundImage ? `url(${theme.backgroundImage})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
  
      {/* Avatar */}
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
        <LinkGroup group={group} key={group.title} />
      ))}
      
      {/* Footer */}
      <div style={{ marginTop: "40px" }}>*Footer*</div>
  </div>
)
}