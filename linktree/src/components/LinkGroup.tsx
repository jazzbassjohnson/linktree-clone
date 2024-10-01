// TODO: Implement link group with a list view or grid view of links
import Link from "./Link"
import { LinkGroupType } from "./types"

export const LinkGroup = ({group}: {group: LinkGroupType}) => {
  return <div>
    <h2>{group.title}</h2>
    {group.links.map((link) => {
      return <Link key={link.id} {...link} type={group.viewType} />
    })} 
  </div>
}