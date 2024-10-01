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

  return (
      <a className={`link-${type}-item`} href={url}>
        <div className={`link-content`}>
            <img src={icon} alt="Link" />
            <p>{title}</p>
        </div>
      </a>
  )
}

export default Link