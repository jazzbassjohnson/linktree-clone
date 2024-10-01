// TODO: Implement link group with a list view or grid view of links
import Link from "./Link"
import { LinkGroupType } from "./types"

export const LinkGroup = ({group}: {group: LinkGroupType}) => {
  return <div className="link-group-container">
    <h2>{group.title}</h2>
    <div className={`link-group-${group.viewType}`}>
      {group.links.map((link) => {
        return <Link key={link.id} {...link} type={group.viewType} />
      })} 
    </div>
  </div>
}