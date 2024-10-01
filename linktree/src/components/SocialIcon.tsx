// TODO: Implement social icon (icons are from /public/assets/social-icons)
export const SocialIcon = ({name, url}: {name: string, url: string}) => {
  return <img src={url} alt={name} />
}