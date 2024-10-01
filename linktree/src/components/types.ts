export type LinkViewType = "LIST" | "GRID"

export type LinkType = {
  id: string
  title: string
  url: string
  icon: string
}

export type LinkGroupType = {
  title: string
  viewType: LinkViewType
  links: LinkType[]
}

export type Profile = {
  name: string
  description: string
  image: string
  groups: LinkGroupType[]
  verified: boolean
}