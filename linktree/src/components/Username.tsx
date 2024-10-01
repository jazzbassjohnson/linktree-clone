// TODO: Implement username with name and verified badge

import verifiedIcon from "../assets/verified-badge.svg"

export const Username = ({name, verified}: {name: string, verified: boolean}) => {
  return <div style={{ display: "flex", alignItems: "center" }}>
    <h1>{name}</h1>
    {verified && <img src={verifiedIcon} alt="Verified" style={{ width: "20px", height: "20px" }} />}
    </div>
}