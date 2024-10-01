// TODO: Implement link with title and url with 2 display types:
// 1. List view: Display title, url and optional image_url  
// 2. Grid view: Display title, url and optional image_url
import { LinkViewType } from "./types"

type LinkPropsType = {
  title: string
  url: string
  icon: string
  type: LinkViewType
}

const Link = ({title, url, icon, type}: LinkPropsType) => {
  return <div>
    {type === "LIST" && <div>
      <img src={icon} alt="Link" />
      <h2>{title}</h2>
      <a href={url}>{url}</a>
    </div>}
    {type === "GRID" && <div>
      <img src={icon} alt="Link" />
      <h2>{title}</h2>
      <a href={url}>{url}</a>
    </div>} 
  </div>
}

export default Link