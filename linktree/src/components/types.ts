export type LinkViewType = "list" | "grid"

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
  id: string
  name: string
  description: string
  image: string
  groups: LinkGroupType[]
  verified: boolean
  socials: Social[]
  theme: Theme
}

export type Social = {
  name: string
  url: string
  icon: string
}

// TODO: Create model for theme
export type Theme = {
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  backgroundImage: string
}