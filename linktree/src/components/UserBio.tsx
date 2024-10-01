// TODO: Implement user bio with a maximum of 80 characters. If the bio is longer than 80 characters, it should be truncated and an ellipsis should be shown.

export const UserBio = ({bio}: {bio: string}) => {
  return <p className="user-bio">{bio}</p>
}