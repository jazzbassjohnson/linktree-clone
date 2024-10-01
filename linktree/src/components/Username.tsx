// TODO: Implement username with name and verified badge

import verifiedIcon from "../assets/verified-badge.svg"

export const Username = ({name, verified}: {name: string, verified: boolean}) => {
  return <div style={{ display: "flex", alignItems: "center" }}>
    <p>{name} {verified && <img src={verifiedIcon} alt="Verified" style={{ width: "15px", height: "15px" }} />}</p>
    </div>
}