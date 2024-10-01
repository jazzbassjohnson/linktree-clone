// TODO: Implement social row with the user's social media  icons
import { SocialIcon } from "./SocialIcon"
import { Social } from "./types"
export const SocialRow = ({socials}: {socials: Social[]}) => {
  return (
    <div>
      {socials.map((social) => (
        <span className="social-icon" key={social.name}>
          <a href={social.url} >
            <SocialIcon key={social.name} name={social.name} url={social.icon} />
          </a>
        </span>
      ))}
    </div>
  )
}