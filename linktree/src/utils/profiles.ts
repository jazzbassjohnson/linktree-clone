// TODO: Create a JSON data structure to represent the profile with the required fields (profile image, username, bio, social icons, and links).
// TODO: Add groups of links to the profile
export const profiles = [
  {
    id: "1",
    name: "John Doe",
    description: "Influencer",
    image: "/john-doe.png",
    theme: {
      primaryColor: "#000000",
      secondaryColor: "#FFFFFF",
      backgroundColor: "#000000",
      backgroundImage: "/background-image.png"
    },
    socials: [
      {
        name: "Follow me on Instagram",
        url: "https://www.instagram.com/john.doe",
        icon: "/instagram.svg"
      },
      {
        name: "Follow me on Facebook",
        url: "https://www.facebook.com/john.doe",
        icon: "/facebook.svg"
      },
      {
        name: "Check out my Youtube",
        url: "https://www.youtube.com/john.doe",
        icon: "/youtube.svg"
      }
    ],
    groups: [
      {
        title: "Social Media",
        viewType: "list",
        links: [
          {
            id: "1",
            title: "Follow me on Instagram",
            url: "https://www.instagram.com/john.doe",
            icon: "/instagram.svg"
          },
          {
            id: "2",
            title: "Follow me on Facebook",
            url: "https://www.facebook.com/john.doe",
            icon: "/facebook.svg"
          }
        ],
      },
      {
        title: "Music",
        viewType: "grid",
        links: [
          {
            id: "3",
            title: "Check out my music on Tidal",
            url: "https://www.tidal.com/john.doe",
            icon: "/tidal.svg"
          },
          {
            id: "4",
            title: "Check out my music on Apple Music",
            url: "https://www.apple.com/music/john.doe",
            icon: "/apple-music.svg"
          }
        ]
      }
    ],
    verified: true
  },
  {
    id: "2",
    name: "Jane Doe",
    description: "Software Engineer & Influencer",
    image: "/jane-doe.png",
    theme: {
      primaryColor: "#000000",
      secondaryColor: "#FFFFFF",
      backgroundColor: "#000000",
    },
    groups: [
      {
        title: "Social Media",
        viewType: "list",
        links: [
          {
            id: "5",
            title: "Follow me on Instagram",
            url: "https://www.instagram.com/janedoe",
            icon: "/instagram.svg"
          },
          {
            id: "6",
            title: "Follow me on Facebook",
            url: "https://www.facebook.com/janedoe",
            icon: "/facebook.svg"
          },
          {
            id: "7",
            title: "Check out my Youtube channel",
            url: "https://www.youtube.com/janedoe",
            icon: "/youtube.svg"
          }
        ]
      }
    ],
    verified: false
  },
]