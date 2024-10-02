// TODO: Rewrite the profiles to use the new data structure
// The new data structure is more flexible and can be used to create more complex profiles
/**
 * {
 *  id: string;
 *  name: string;
 *  description: string;
 *  image_url: string;
 *  theme: {
 *    primary_color: string;
 *    secondary_color: string;
 *    background_image_url: string;
 *  };
 *  content: {
 *    title: string;
 *    items: {
 *      id: string;
 *      title: string;
 *      links: {
 *        id: string;
 *        title: string;
 *        url: string;
 *        icon_url: string;
 *        view_type: "list" | "grid";
 *      }[];
 *    }[];
 *  }[];
 *  verified: boolean;
 * }
 */

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