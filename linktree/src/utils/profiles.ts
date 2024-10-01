// TODO: Create a JSON data structure to represent the profile with the required fields (profile image, username, bio, social icons, and links).
// TODO: Add groups of links to the profile
export const profiles = [
  {
    name: "John Doe",
    description: "Influencer",
    image: "/john-doe.png",
    groups: [
      {
        title: "Social Media",
        viewType: "LIST",
        links: [
          {
            id: "1",
            title: "Instagram",
            url: "https://www.instagram.com/john.doe",
            icon: "/instagram.svg"
          },
          {
            id: "2",
            title: "Facebook",
            url: "https://www.facebook.com/john.doe",
            icon: "/facebook.svg"
          }
        ],
      },
      {
        title: "Music",
        viewType: "GRID",
        links: [
          {
            id: "3",
            title: "Tidal",
            url: "https://www.tidal.com/john.doe",
            icon: "/tidal.svg"
          },
          {
            id: "4",
            title: "Apple Music",
            url: "https://www.apple.com/music/john.doe",
            icon: "/apple-music.svg"
          }
        ]
      }
    ],
    verified: true
  },
  {
    name: "Jane Doe",
    description: "Software Engineer & Influencer",
    image: "/jane-doe.png",
    groups: [
      {
        title: "Social Media",
        viewType: "LIST",
        links: [
          {
            id: "5",
            title: "Instagram",
            url: "https://www.instagram.com/janedoe",
            icon: "/instagram.svg"
          },
          {
            id: "6",
            title: "Facebook",
            url: "https://www.facebook.com/janedoe",
            icon: "/facebook.svg"
          },
          {
            id: "7",
            title: "Youtube",
            url: "https://www.youtube.com/janedoe",
            icon: "/youtube.svg"
          }
        ]
      }
    ],
    verified: false
  },
]