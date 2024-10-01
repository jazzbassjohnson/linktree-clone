// TODO: Implement user avatar with a circular border

export const UserAvatar = ({src}: {src: string}) => {
  return <div style={{ borderRadius: "50%", overflow: "hidden", width: "100px", height: "100px", backgroundColor: "white" }}>
    <img src={src} alt="User Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  </div>
}