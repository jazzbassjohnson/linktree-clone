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

  const { theme, setTheme } = useContext(ThemeContext)
  const background = theme.backgroundImage ? `url(${theme.backgroundImage})` : theme.backgroundColor
  const { primaryColor, secondaryColor } = theme

  useEffect(() => {
    setTheme(profile.theme)
  }, [profile.theme, setTheme])
  
  return (
    <div className="profile-container" style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", background: background, color: primaryColor, border: `2px solid ${secondaryColor}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh" }}>
  
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
        <LinkGroup group={group} />
      ))}
      
      {/* Footer */}
      <div style={{ marginTop: "40px" }}>*Footer*</div>
    </div>
  )
}